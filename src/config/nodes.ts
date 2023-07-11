import { polygon, sepolia } from 'wagmi/chains'
import { getNodeRealUrlV2 } from 'utils/nodeReal'
import { ChainId } from './chains'

export const SERVER_NODES = {
  [ChainId.BSC]: [
    process.env.REACT_APP_NODE_PRODUCTION,
    'https://bsc-dataseed1.defibit.io',
    'https://bsc-dataseed1.binance.org',
  ].filter(Boolean),
  [ChainId.BSC_TESTNET]: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
  [ChainId.ETHEREUM]: [
    getNodeRealUrlV2(ChainId.ETHEREUM, process.env.SERVER_NODE_REAL_API_ETH),
    'https://eth.llamarpc.com',
    'https://cloudflare-eth.com',
  ],
  [ChainId.GOERLI]: [
    getNodeRealUrlV2(ChainId.GOERLI, process.env.SERVER_NODE_REAL_API_GOERLI),
    'https://eth-goerli.public.blastapi.io',
  ].filter(Boolean),
  [ChainId.SEPOLIA]: sepolia.rpcUrls.public.http,
  [ChainId.POLYGON]: polygon.rpcUrls.public.http,
} satisfies Record<ChainId, readonly string[]>

export const PUBLIC_NODES = {
  [ChainId.BSC]: [
    process.env.REACT_APP_NODE_PRODUCTION,
    getNodeRealUrlV2(ChainId.BSC, process.env.REACT_APP_NODE_REAL_API_ETH),
    'https://bsc-dataseed1.defibit.io',
    'https://bsc-dataseed1.binance.org',
  ].filter(Boolean),
  [ChainId.BSC_TESTNET]: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
  [ChainId.ETHEREUM]: [
    getNodeRealUrlV2(ChainId.ETHEREUM, process.env.NEXT_PUBLIC_NODE_REAL_API_ETH),
    'https://eth.llamarpc.com',
    'https://cloudflare-eth.com',
  ].filter(Boolean),
  [ChainId.GOERLI]: [
    getNodeRealUrlV2(ChainId.GOERLI, process.env.NEXT_PUBLIC_NODE_REAL_API_GOERLI),
    'https://eth-goerli.public.blastapi.io',
  ].filter(Boolean),
  [ChainId.SEPOLIA]: sepolia.rpcUrls.public.http,
  [ChainId.POLYGON]: polygon.rpcUrls.public.http,
} satisfies Record<ChainId, readonly string[]>
