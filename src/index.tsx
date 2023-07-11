import { ReactNode, useMemo } from 'react'
import { useAccount } from 'wagmi'
import { BLOCKED_ADDRESSES } from './config/constants'

export function Updaters() {
  return (
    <></>
  )
}

export function Blocklist({ children }: { children: ReactNode }) {
  const { address: account } = useAccount()
  const blocked: boolean = useMemo(() => Boolean(account && BLOCKED_ADDRESSES.indexOf(account) !== -1), [account])
  if (blocked) {
    return <div>Blocked address</div>
  }
  return <>{children}</>
}
