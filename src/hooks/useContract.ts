import { useMemo } from 'react'
import { Abi, Address } from 'viem'
import { useWalletClient } from 'wagmi'
import { getCactusContract, getContract } from 'utils/contractHelpers'
import { useActiveChainId } from './useActiveChainId'

export const useCactus = () => {
  const { chainId } = useActiveChainId()
  const { data: signer } = useWalletClient()
  // @ts-ignore
  return useMemo(() => getCactusContract(chainId, signer), [chainId, signer]) 
  
}

export function useContract<TAbi extends Abi>(
  addressOrAddressMap?: Address | { [chainId: number]: Address },
  abi?: TAbi,
) {
  const { chainId } = useActiveChainId()
  const { data: walletClient } = useWalletClient()

  return useMemo(() => {
    if (!addressOrAddressMap || !abi || !chainId) return null
    let address: Address | undefined
    if (typeof addressOrAddressMap === 'string') address = addressOrAddressMap
    else address = addressOrAddressMap[chainId]
    if (!address) return null
    try {
      return getContract({
        abi,
        address,
        chainId,
        // @ts-ignore
        signer: walletClient,
      })
    } catch (error) {
      console.error('Failed to get contract', error)
      return null
    }
  }, [addressOrAddressMap, abi, chainId, walletClient])
}
