import { configureScope } from '@sentry/nextjs'
import { Dispatch } from '@reduxjs/toolkit'
import { resetUserState, toggleFarmTransactionModal } from 'state/global/actions'

export const clearUserStates = (
  dispatch: Dispatch<any>,
  {
    chainId,
    newChainId,
  }: {
    chainId?: number
    newChainId?: number
  },
) => {
  dispatch(resetUserState({ chainId, newChainId }))
  dispatch(toggleFarmTransactionModal({ showModal: false }))
  configureScope((scope) => scope.setUser(null))
}
