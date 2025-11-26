<div align="center">

# MnadAI | Monad AI Agent

![83658abf-c342-42b2-9279-82b780dec9512](https://github.com/user-attachments/assets/d31aab05-533b-4b6c-8375-1477989360ba)

An open-source LangChain agent that automates wallet management, on-chain data collection, and token operations on the Monad Mainnet.

</div>

---

- [Overview](#overview)
- [Key Capabilities](#key-capabilities)
- [Architecture Highlights](#architecture-highlights)
- [Documentation](#documentation)
- [Getting Started](#getting-started)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Usage Examples](#usage-examples)
- [Environment Variables](#environment-variables)
- [Core Dependencies](#core-dependencies)
- [Contributing](#contributing)
- [License](#license)
- [Security Notes](#security-notes)

---

## Overview

**MnadAI | Monad AI Agent** is designed for teams that need a reliable automation layer on top of the Monad Mainnet. The agent combines deterministic blockchain tooling with LLM-powered reasoning so that wallets, token operations, and market data can be orchestrated through natural-language prompts or autonomous task plans.

Production deployment: **[MnadAI AI](https://MnadAI-ai.vercel.app/)**.

## Key Capabilities

- **Wallet & Token Operations**
  - Provision and manage Monad Mainnet wallets
  - Retrieve MONAD balances and historical activity
  - Transfer MONAD to arbitrary recipients
  - Create and deploy custom tokens
  - Provide funding guidance for on-chain operations
  - Sign payloads for downstream contract workflows

- **On-Chain Intelligence**
  - Query recent transactions with explorer links
  - Surface real-time gas estimates
  - Fetch live token prices (CoinGecko) and trending assets

- **Agentic Automation**
  - LangChain toolset with React-style state management
  - Autonomous and guided chat modes
  - Streaming responses, memory retention, and structured error handling

## Architecture Highlights

- LangChain + LangGraph orchestration with tool nodes for each blockchain action
- Express/Node backend packaged for Vercel or self-hosted deployments
- React + Privy frontend for wallet-authenticated chat UX
- Typed configuration via Zod schemas and centralized logging (tslog)

```typescript
import { ChatOpenAI } from "@langchain/openai";
import { StateGraph, END } from "@langchain/langgraph";
import { ToolNode } from "@langchain/langgraph/prebuilt";
import { ethers } from "ethers";
import { Logger } from "tslog";

const graph = new StateGraph({
  channels: ["wallet", "context"],
  nodes: {
    tools: new ToolNode(/* blockchain utilities */),
  },
  entry: "tools",
  end: END,
});

const model = new ChatOpenAI({ model: "gpt-4o-mini", streaming: true });
const log = new Logger({ name: "MonadAgent" });
```

## Documentation

Full product and API documentation is available at the [MnadAI Agent Documentation](https://Novus-Tech-LLC-organization-8.gitbook.io/MnadAI).

## Getting Started

```bash
git clone https://github.com/Novus-Tech-LLC/MnadAI.git
cd MnadAI
npm install
```

The repository contains a TypeScript backend in `monadagent/` and a Vite/React frontend in `src/`. Each layer has its own environment file.

## Backend Setup

```bash
cd monadagent
npm install
```

1. Create `monadagent/.env` and provide the variables listed in the [Environment Variables](#environment-variables) section.
2. Start the agent service:
   ```bash
   npx ts-node monadAgent.ts
   ```
3. Validate the API:
   ```bash
   curl -X POST http://localhost:3000/agent \
     -H "Content-Type: application/json" \
     -d '{"input": "help"}'
   ```

## Frontend Setup

```bash
cd ..
npm install
```

1. Create `.env` in the project root with frontend variables (see below).
2. Launch the Vite dev server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:5173/dashboard`, connect via Privy, and start issuing commands to the agent.

## Usage Examples

Commands are issued through `src/components/ChatInterface.tsx`. Representative prompts:

- `setWallet <private-key>` → `Wallet set to address: 0x...`
- `getBalance` → `Balance: 10 MONAD`
- `transferTokens <recipient-address> 1` → `Transaction hash: 0x...`
- `getTokenPrice MONAD` → `MONAD price: $0.50 USD`
- `createToken MyToken MTK 1000` → `Token address: 0x...`

## Environment Variables

| Variable | Location | Purpose |
| --- | --- | --- |
| `OPENAI_API_KEY` | `monadagent/.env` | LLM access for LangChain tools |
| `COINGECKO_API_KEY` | `monadagent/.env` | Token price lookups |
| `DEXSCREENER_API_KEY` | `monadagent/.env` | Trending token data (optional) |
| `MONAD_RPC_URL` | `monadagent/.env` | RPC endpoint (defaults to https://mainnet-rpc.monad.xyz) |
| `VITE_API_ENDPOINT` | `./.env` | URL of the backend agent (`http://localhost:3000/agent`) |
| `VITE_PRIVY_APP_ID` | `./.env` | Privy application identifier |

## Core Dependencies

- **Backend (`monadagent/`)**
  - `@langchain/openai`, `@langchain/langgraph`, `@langchain/core`
  - `ethers`, `axios`, `express`, `cors`, `body-parser`, `tslog`, `zod`

- **Frontend (`src/`)**
  - `react`, `@privy-io/react-auth`, `@tanstack/react-query`
  - `shadcn/ui`, `tailwindcss`, `typescript`, `vite`

## Contributing

Pull requests and issues are welcome. Please include context on the feature or bugfix and add tests where applicable.

## License

Distributed under the MIT License. See the [`LICENSE`](LICENSE) file for details.

## Security Notes

- Do not commit private keys or API keys to the repository.
- Store all credentials in local `.env` files and ensure they remain in `.gitignore`.
- Rotate keys periodically and restrict RPC endpoints to trusted networks where possible.

