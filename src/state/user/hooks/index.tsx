import useSWR from 'swr'
import { Hex, hexToBigInt } from 'viem'
import { useFeeData, useWalletClient } from 'wagmi'
import { ChainId } from 'config'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { GAS_PRICE_GWEI } from '../../types'

export function useFeeDataWithGasPrice(chainIdOverride?: number): {
  gasPrice?: bigint
  maxFeePerGas?: bigint
  maxPriorityFeePerGas?: bigint
} {
  const { chainId: chainId_ } = useActiveChainId()
  const chainId = chainIdOverride ?? chainId_
  const gasPrice = useGasPrice(chainId)
  const { data } = useFeeData({
    chainId,
    enabled: chainId !== ChainId.BSC && chainId !== ChainId.BSC_TESTNET,
    watch: true,
  })

  if (gasPrice) {
    return {
      gasPrice,
    }
  }

  return {
    gasPrice: data?.gasPrice,
    maxFeePerGas: data?.maxFeePerGas,
    maxPriorityFeePerGas: data?.maxPriorityFeePerGas,
  }
}

const DEFAULT_BSC_GAS_BIGINT = BigInt(GAS_PRICE_GWEI.default)
const DEFAULT_BSC_TESTNET_GAS_BIGINT = BigInt(GAS_PRICE_GWEI.testnet)
/**
 * Note that this hook will only works well for BNB chain
 */
export function useGasPrice(chainIdOverride?: number): bigint | undefined {
  const { chainId: chainId_ } = useActiveChainId()
  const chainId = chainIdOverride ?? chainId_
  const { data: signer } = useWalletClient({ chainId })
  const { data: bscProviderGasPrice = DEFAULT_BSC_GAS_BIGINT } = useSWR(
    signer && chainId === ChainId.BSC && ['bscProviderGasPrice', signer],
    async () => {
      // @ts-ignore
      const gasPrice = await signer?.request({
        method: 'eth_gasPrice',
      })
      return hexToBigInt(gasPrice as Hex)
    },
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  )
  if (chainId === ChainId.BSC) {
    return bscProviderGasPrice
  }
  if (chainId === ChainId.BSC_TESTNET) {
    return DEFAULT_BSC_TESTNET_GAS_BIGINT
  }
  return undefined
}
