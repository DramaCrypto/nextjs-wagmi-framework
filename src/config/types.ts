import BigNumber from 'bignumber.js'

export interface Address {
    1?: string
    5?: string
    11155111?: string
    56?: string
    97?: string
}

export type PageMeta = {
  title: string
  description?: string
  image?: string
}

export interface NftProps {
    price: number
    maxPerWallet: number
    totalSupply: number
    maxSupply: number
}

export interface UserProps {
    ethBalance: number
    nftBalance: number
    nftMinted: number
}

export const FetchStatus = {
  Idle: 'idle',
  Fetching: 'loading',
  Fetched: 'success',
  Failed: 'error',
} as const

export type TFetchStatus = (typeof FetchStatus)[keyof typeof FetchStatus]
