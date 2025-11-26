import { useCallback, useMemo, useState } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

export const useWalletConnection = () => {
  const { ready, authenticated, login, logout } = usePrivy();
  const [pendingAction, setPendingAction] = useState<'connect' | 'disconnect' | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const ensureReady = useCallback(() => {
    if (ready) {
      return true;
    }

    toast({
      title: 'Wallet initializing',
      description: 'Please wait while the connector finishes loading.',
    });

    return false;
  }, [ready]);

  const connectWallet = useCallback(async () => {
    if (!ensureReady()) return;

    if (authenticated) {
      navigate('/dashboard');
      return;
    }

    try {
      setPendingAction('connect');
      await login();
    } catch (error) {
      console.error('Privy login error:', error);
      toast({
        title: 'Connection failed',
        description: 'Unable to connect your wallet. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setPendingAction(null);
    }
  }, [ensureReady, authenticated, login, navigate]);

  const disconnectWallet = useCallback(async () => {
    if (!ensureReady()) return;

    if (!authenticated) {
      navigate('/');
      return;
    }

    try {
      setPendingAction('disconnect');
      await logout();
      navigate('/');
      toast({
        title: 'Wallet disconnected',
        description: 'You have been signed out securely.',
      });
    } catch (error) {
      console.error('Privy logout error:', error);
      toast({
        title: 'Unable to disconnect',
        description: 'Please try again in a moment.',
        variant: 'destructive',
      });
    } finally {
      setPendingAction(null);
    }
  }, [ensureReady, authenticated, logout, navigate]);

  const isProcessing = pendingAction !== null;
  const isOnDashboard = location.pathname === '/dashboard';

  const statusLabel = useMemo(() => {
    if (isProcessing) {
      return pendingAction === 'disconnect' ? 'Disconnecting...' : 'Connecting...';
    }
    if (authenticated) {
      return isOnDashboard ? 'Disconnect' : 'Dashboard';
    }
    return 'Connect Wallet';
  }, [authenticated, isProcessing, isOnDashboard, pendingAction]);

  return {
    ready,
    authenticated,
    isProcessing,
    statusLabel,
    isOnDashboard,
    connectWallet,
    disconnectWallet,
  };
};

