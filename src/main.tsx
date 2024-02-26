import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { http, createConfig, WagmiProvider, useAccount } from 'wagmi'
import { base, mainnet, sepolia } from 'wagmi/chains'
import { injected, coinbaseWallet, metaMask, walletConnect } from 'wagmi/connectors'


import { WalletOptions } from './pages/Mint/WalletOptions.tsx'
const queryClient = new QueryClient()

const projectId = '<WALLETCONNECT_PROJECT_ID>'

export const config = createConfig({
  chains: [mainnet, base, sepolia],
  connectors: [
    walletConnect({ projectId }),
    metaMask(),
    coinbaseWallet({
      appName: 'My Wagmi App',
    })
  ],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
    [sepolia.id]: http()
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
