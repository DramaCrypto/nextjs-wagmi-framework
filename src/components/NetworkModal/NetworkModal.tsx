import { ModalV2 } from 'packages/uikit'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { CHAIN_IDS } from 'utils/wagmi'
import { useMemo } from 'react'
import { useNetwork } from 'wagmi'
import { atom, useAtom } from 'jotai'
import { ChainId, SUPPORT_GLOBAL_CHAIN } from 'config'
import { UnsupportedNetworkModal } from './UnsupportedNetworkModal'
import { WrongNetworkModal } from './WrongNetworkModal'

export const hideWrongNetworkModalAtom = atom(false)

export const NetworkModal = ({ pageSupportedChains = SUPPORT_GLOBAL_CHAIN }: { pageSupportedChains?: number[] }) => {
  const { chainId, chain, isWrongNetwork } = useActiveWeb3React()
  const { chains } = useNetwork()
  const [dismissWrongNetwork, setDismissWrongNetwork] = useAtom(hideWrongNetworkModalAtom)

  const isPageNotSupported = useMemo(
    () => Boolean(pageSupportedChains.length) && !pageSupportedChains.includes(chainId),
    [chainId, pageSupportedChains],
  )

  if ((chain?.unsupported ?? false) || isPageNotSupported) {
    return (
      <ModalV2 isOpen closeOnOverlayClick={false}>
        <UnsupportedNetworkModal pageSupportedChains={pageSupportedChains?.length ? pageSupportedChains : CHAIN_IDS} />
      </ModalV2>
    )
  }

  if (isWrongNetwork && !dismissWrongNetwork) {
    const currentChain = chains.find((c) => c.id === chainId)
    if (!currentChain) return null
    return (
      <ModalV2 isOpen={isWrongNetwork} closeOnOverlayClick onDismiss={() => setDismissWrongNetwork(true)}>
        <WrongNetworkModal currentChain={currentChain} onDismiss={() => setDismissWrongNetwork(true)} />
      </ModalV2>
    )
  }

  return null
}
