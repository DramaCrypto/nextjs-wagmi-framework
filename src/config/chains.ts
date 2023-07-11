import memoize from 'lodash/memoize'
import {
  goerli,
  mainnet,
  polygon,
  sepolia
} from 'wagmi/chains'

export enum ChainId {
  ETHEREUM = 1,
  GOERLI = 5,
  SEPOLIA = 11155111,
  BSC = 56,
  BSC_TESTNET = 97,
  POLYGON = 137
}

export const CHAIN_QUERY_NAME = {
  [ChainId.ETHEREUM]: 'eth',
  [ChainId.GOERLI]: 'goerli',
  [ChainId.SEPOLIA]: 'sepolia',
  [ChainId.BSC]: 'bsc',
  [ChainId.BSC_TESTNET]: 'bscTestnet',
  [ChainId.POLYGON]: 'polygon',
} as const satisfies Record<ChainId, string>

const CHAIN_QUERY_NAME_TO_ID = Object.entries(CHAIN_QUERY_NAME).reduce((acc, [chainId, chainName]) => {
  return {
    [chainName.toLowerCase()]: chainId as unknown as ChainId,
    ...acc,
  }
}, {} as Record<string, ChainId>)

export const getChainId = memoize((chainName: string) => {
  if (!chainName) return undefined
  return CHAIN_QUERY_NAME_TO_ID[chainName.toLowerCase()] ? +CHAIN_QUERY_NAME_TO_ID[chainName.toLowerCase()] : undefined
})

export const CHAINS = [
  goerli,
  mainnet,
  polygon,
  sepolia
]
