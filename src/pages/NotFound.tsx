
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import MainLayout from "../layouts/MainLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <MainLayout>
      <div className="min-h-[90vh] flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <p className="text-sm font-medium text-muted-foreground mb-2">404 Error</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Page not found</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          <a 
            href="/" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-all"
          >
            <ArrowLeft size={18} />
            Return to Home
          </a>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
