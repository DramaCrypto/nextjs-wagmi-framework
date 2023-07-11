import { ChainId } from 'config'
import {
  Abi,
  PublicClient,
  WalletClient,
  getContract as viemGetContract
} from 'viem'
import { Address } from 'wagmi'
import { viemClients } from 'utils/viem'
import cactusAbi from 'config/abi/cactus.json'
import { getCactusAddress } from './addressHelpers'

export const getContract = <TAbi extends Abi | unknown[], TWalletClient extends WalletClient>({
  abi,
  address,
  chainId = ChainId.GOERLI,
  publicClient,
  signer,
}: {
  abi: TAbi
  address: Address
  chainId?: ChainId
  signer?: TWalletClient
  publicClient?: PublicClient
}) => {
  const c = viemGetContract({
    abi,
    address,
    publicClient: publicClient ?? viemClients[chainId],
    walletClient: signer,
  })
  return {
    // @ts-ignore
    ...c, account: signer?.account, chain: signer?.chain,
  }
}

export const getCactusContract = (chainId: ChainId, signer?: WalletClient) => {
  return getContract({ abi: cactusAbi, address: getCactusAddress(chainId), chainId, signer })
}
