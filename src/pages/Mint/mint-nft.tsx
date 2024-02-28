import * as React from 'react'
import {
    type BaseError,
    useWaitForTransactionReceipt,
    useWriteContract,
    useReadContract,

} from 'wagmi'

import { useState } from 'react'

import { contractAbi } from './contractAbi '
import { parseEther } from 'viem'
import { switchChain, getConnections, switchAccount } from '@wagmi/core'

import { bsc } from '@wagmi/core/chains'
import { config } from './config'




export function MintNFT() {
    const {
        data: hash,
        error,
        isPending,
        writeContract
    } = useWriteContract()

    let price = useReadContract({
        abi: contractAbi,
        address: '0xb481483C20365caA330399da77A0CfF039a8546f',
        functionName: 'price'
    })

    

    

    async function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        // await switchChain(config, {
        //     chainId: bsc.id
        // })

        await window.ethereum.request({
            "method": "wallet_switchEthereumChain",
            "params": [
              {
                "chainId": "0x38"
              }
            ]
          });

        const formData = new FormData(e.target as HTMLFormElement)
  
        writeContract({
            address: '0xb481483C20365caA330399da77A0CfF039a8546f',
            abi: contractAbi,
            functionName: 'mint',
            args: [1],
            value: parseEther('0.1')
        })
    }

    const { isLoading: isConfirming, isSuccess: isConfirmed } =
        useWaitForTransactionReceipt({
            hash,
        })

        const [active, setActive] = useState(false);

    return (
        <form onSubmit={submit}>
            <button
                disabled={isPending}
                type="submit"
            >
                {isPending ? 'Consfirming...' : 'Mint'}
            </button>
            {hash && <div>Transaction Hash: {hash}</div>}
            {isConfirming && <div>Waiting for confirmation...</div>}
            {isConfirmed && <div>Transaction confirmed.</div>}
            {error && (
                <div>Error: {(error as BaseError).shortMessage || error.message}</div>
            )}
        </form>
    )
}