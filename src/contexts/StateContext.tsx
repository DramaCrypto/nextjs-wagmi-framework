import React, { createContext, useCallback, useState } from 'react'
import BigNumber from 'bignumber.js'
import cactusAbi from 'config/abi/cactus.json'
import { NftProps, UserProps } from 'config/types'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useFastRefreshEffect } from 'hooks/useRefreshEffect'
import { getCactusAddress } from 'utils/addressHelpers'
import { getViemClients } from 'utils/viem'
import { getBalanceNumber } from 'packages/utils/formatBalance'

interface ContextProps {
  nftProps: NftProps
  userProps: UserProps
  updateState: () => void
}

export const StateContext = createContext<ContextProps>({
  nftProps: undefined,
  userProps: undefined,
  updateState: undefined
})

export const StateContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [nftProps, setNftProps] = useState<NftProps>()
  const [userProps, setUserProps] = useState<UserProps>()
  const [syncFlag, setSyncFlag] = useState(true)
  const { chainId, account } = useActiveWeb3React()

  const onUpdate = useCallback(() => {
    setSyncFlag(!syncFlag)
  }, [])

  useFastRefreshEffect(() => {
    const fetchContractData = async () => {
      const cactusAddress = getCactusAddress(chainId)
      const client = getViemClients({ chainId })
      const contract = { address: cactusAddress, abi: cactusAbi }
      const publicCalls = [
        { ...contract, functionName: 'mintPrice' },
        { ...contract, functionName: 'maxSupply' },
        { ...contract, functionName: 'totalSupply' },
        { ...contract, functionName: 'maxPerWallet' },
      ]

      // @ts-ignore
      const [[mintPrice], [maxSupply], [totalSupply], [maxPerWallet]] = await client.multicall({
          // @ts-ignore
          contracts: publicCalls,
          allowFailure: false,
          chainId
        })

      setNftProps({
        maxPerWallet: Number(maxPerWallet._hex),
        maxSupply: Number(maxSupply._hex),
        price: getBalanceNumber(new BigNumber(mintPrice._hex)),
        totalSupply: Number(totalSupply._hex)
      })

      if (account) {
        // @ts-ignore
        const multicallAddress = client.chain.contracts?.multicall3?.address
        const userCalls = [
          {
            abi: [
              {
                inputs: [{ internalType: 'address', name: 'addr', type: 'address' }],
                name: 'getEthBalance',
                outputs: [{ internalType: 'uint256', name: 'balance', type: 'uint256' }],
                stateMutability: 'view',
                type: 'function',
              },
            ] as const,
            address: multicallAddress,
            functionName: 'getEthBalance',
            args: [account],

          },
          { ...contract, functionName: 'mintedPerWallet', args: [account] },
          { ...contract, functionName: 'balanceOf', args: [account] }
        ]
        // @ts-ignore
        const [ethBalance, nftMinted, nftBalance] = await client.multicall({
          // @ts-ignore
          contracts: userCalls,
          allowFailure: false,
          chainId
        })
        setUserProps({
          // @ts-ignore
          ethBalance: getBalanceNumber(new BigNumber(ethBalance.result.toString())),
          // @ts-ignore
          nftBalance: Number(nftBalance.result as bigint),
          // @ts-ignore
          nftMinted: Number(nftMinted.result as bigint)
        })
      } else {
        setUserProps(undefined)
      }
    }
    fetchContractData()
  }, [syncFlag, chainId, account])

  return (
    <StateContext.Provider value={{ nftProps, userProps, updateState: onUpdate }}>
      {children}
    </StateContext.Provider>
  )
}
