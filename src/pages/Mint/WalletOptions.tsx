import * as React from 'react'
import { Connector, useConnect } from 'wagmi'
import Coinbase from '../../shared/assets/images/Coinbase.svg'
import metamask from '../../shared/assets/images/metamask.svg'
import WalletConnect from '../../shared/assets/images/WalletConnect.svg'
const connectors = [
  {
    uid: 'metamask',
    name: 'MetaMask',
    icon: metamask,
  },
  {
    uid: 'walletconnect',
    name: 'WalletConnect',
    icon: WalletConnect,
  },
  {
    uid: 'coinbase',
    name: 'Coinbase',
    icon: Coinbase,
  },
]


export function WalletOptions() {
  const { connectors, connect } = useConnect()

  return connectors.map((connector) => (
    <button style={{ color: '#fff' }} className='wallet' key={connector.uid} onClick={() => connect({ connector })}>
      <img
        src={connector.icon}
        alt={connector.name}
      />
      <p>
        {connector.name}
      </p>
    </button>
  ))
}