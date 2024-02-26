import * as React from 'react'
import { Connector, useConnect } from 'wagmi'
import Coinbase from '../../shared/assets/images/Coinbase.svg'
import MetaMask from '../../shared/assets/images/metamask.svg'
import WalletConnect from '../../shared/assets/images/WalletConnect.svg'

export function WalletOptions() {
  const { connectors, connect } = useConnect()

  return connectors.map((connector) => (
    <button
      key={connector.uid}
      className="wallet"
      onClick={() => connect({ connector })}
    >
      <img
        src={
          connector.name === 'MetaMask'
            ? MetaMask
            : connector.name === 'Coinbase Wallet'
              ? Coinbase
              : WalletConnect
        }
        alt={connector.name}
      />
      <p>{connector.name}</p>
    </button>
  ))
}



