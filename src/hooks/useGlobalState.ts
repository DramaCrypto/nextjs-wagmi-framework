import { useContext } from 'react'
import { StateContext } from 'contexts/StateContext'

const useGlobalState = () => {
  const { nftProps, updateState, userProps } = useContext(StateContext)
  return { nftProps, updateState, userProps }
}

export default useGlobalState
