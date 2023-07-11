import { CHAIN_QUERY_NAME } from 'config/chains'
import { ConnectorNames } from 'config/wallet'
import { useCallback } from 'react'
import { 
  ConnectorNotFoundError, 
  SwitchChainNotSupportedError, 
  useConnect, 
  useDisconnect, 
  useNetwork 
} from 'wagmi'
import { useTranslation } from 'packages/localization'
import replaceBrowserHistory from 'packages/utils/replaceBrowserHistory'
import { WalletConnectorNotFoundError, WalletSwitchChainError } from 'packages/ui-wallets'
import { useActiveChainId } from './useActiveChainId'
import { useSessionChainId } from './useSessionChainId'

const useAuth = () => {
  const { connectAsync, connectors } = useConnect()
  const { chain } = useNetwork()
  const { disconnectAsync } = useDisconnect()
  const { chainId } = useActiveChainId()
  const [, setSessionChainId] = useSessionChainId()
  const { t } = useTranslation()

  const login = useCallback(
    async (connectorID: ConnectorNames) => {
      const findConnector = connectors.find((c) => c.id === connectorID)
      try {
        const connected = await connectAsync({ connector: findConnector, chainId })
        if (!connected.chain.unsupported && connected.chain.id !== chainId) {
          replaceBrowserHistory('chain', CHAIN_QUERY_NAME[connected.chain.id])
          setSessionChainId(connected.chain.id)
        }
        return connected
      } catch (error) {
        if (error instanceof ConnectorNotFoundError) {
          throw new WalletConnectorNotFoundError()
        }
        if (
          error instanceof SwitchChainNotSupportedError
          // TODO: wagmi
          // || error instanceof SwitchChainError
        ) {
          throw new WalletSwitchChainError(t('Unable to switch network. Please try it on your wallet'))
        }
      }
      return undefined
    },
    [connectors, connectAsync, chainId, setSessionChainId],
  )

  const logout = useCallback(async () => {
    try {
      await disconnectAsync()
    } catch (error) {
      console.error(error)
    } finally {
      // clearUserStates(dispatch, { chainId: chain?.id })
      console.log("clear state operation should be done here")
    }
  }, [disconnectAsync, chain?.id])

  return { login, logout }
}

export default useAuth
