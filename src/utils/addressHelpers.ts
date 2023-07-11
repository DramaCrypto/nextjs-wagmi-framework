import { CHAIN_ID, ChainId } from 'config'
import addresses from 'config/contracts'

export interface Addresses {
  [chainId: number]: `0x${string}`
}

export const getAddressFromMap = (address: Addresses, chainId?: number): `0x${string}` => {
  return address[chainId] ? address[chainId] : address[CHAIN_ID]
}

export const getAddressFromMapNoFallback = (address: Addresses, chainId?: number): `0x${string}` | null => {
  return address[chainId]
}

export const getCactusAddress = (chainId: ChainId) => {
  return getAddressFromMap(addresses.cactus, chainId)
}

