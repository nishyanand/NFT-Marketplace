// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import { createConfig, WagmiProvider, http } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { injected } from '@wagmi/connectors';

// ✅ Define Metis Sepolia
const metisSepolia = {
  id: 59901,
  name: 'Metis Sepolia',
  network: 'metis-sepolia',
  nativeCurrency: {
    name: 'Metis',
    symbol: 'tMETIS',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://sepolia.rpc.metisdevops.link'],
    },
  },
  blockExplorers: {
    default: { name: 'Metis Explorer', url: 'https://sepolia.explorer.metisdevops.link' },
  },
  testnet: true,
};

// ✅ Create wagmi config
const config = createConfig({
  chains: [metisSepolia],
  connectors: [injected()],
  transports: {
    [metisSepolia.id]: http(),
  },
});

// ✅ React Query setup (required by wagmi v2)
const queryClient = new QueryClient();

// ✅ Render
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);

reportWebVitals();



