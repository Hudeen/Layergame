import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { http, createConfig, WagmiProvider, useAccount } from 'wagmi'
import { bscTestnet, bsc } from 'wagmi/chains'
import { walletConnect, injected } from 'wagmi/connectors'

import { WalletOptions } from './pages/Mint/WalletOptions.tsx'
const queryClient = new QueryClient()

const projectId = '4f01fbdf8b89bb19b0909f4b57c7e040'

export const config = createConfig({
  chains: [bscTestnet, bsc],
  connectors: [
    walletConnect({ projectId }),

  ],
  transports: {
    [bscTestnet.id]: http(),
    [bsc.id]: http()
  },
})




function ConnectWallet() {


  const { isConnected } = useAccount()
  return <WalletOptions />
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
)
