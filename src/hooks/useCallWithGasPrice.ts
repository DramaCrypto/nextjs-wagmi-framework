import { useCallback } from 'react'
import { useGasPrice } from 'state/user/hooks'
import { publicClient } from 'utils/wagmi'
import {
  Abi,
  Account,
  Address,
  CallParameters,
  Chain,
  GetFunctionArgs,
  InferFunctionName,
  WriteContractParameters,
} from 'viem'
import { EstimateContractGasParameters } from 'viem/dist/types/actions/public/estimateContractGas'
import { useWalletClient } from 'wagmi'
import { SendTransactionResult } from 'wagmi/actions'
import { calculateGasMargin } from 'utils'
import { useActiveChainId } from './useActiveChainId'

export function useCallWithGasPrice() {
  const gasPrice = useGasPrice()
  const { chainId } = useActiveChainId()
  const { data: walletClient } = useWalletClient()

  const callWithGasPriceWithSimulate = useCallback(
    async <
      TAbi extends Abi | unknown[],
      TFunctionName extends string = string,
      _FunctionName = InferFunctionName<TAbi, TFunctionName>,
      Args = TFunctionName extends string
        ? GetFunctionArgs<TAbi, TFunctionName>['args']
        : _FunctionName extends string
        ? GetFunctionArgs<TAbi, _FunctionName>['args']
        : never,
    >(
      contract: { abi: TAbi; account: Account; chain: Chain; address: Address },
      methodName: InferFunctionName<TAbi, TFunctionName>,
      methodArgs?: Args extends never ? undefined : Args,
      overrides?: Omit<CallParameters, 'chain' | 'to' | 'data'>,
    ): Promise<SendTransactionResult> => {
      // @ts-ignore
      const gas = await publicClient({ chainId }).estimateContractGas({
        abi: contract.abi,
        address: contract.address,
        // @ts-ignore
        account: walletClient.account,
        functionName: methodName,
        args: methodArgs,
        gasPrice,
        value: 0n,
        ...overrides,
      } as unknown as EstimateContractGasParameters)
      // @ts-ignore
      const res = await walletClient.writeContract({
        abi: contract.abi,
        address: contract.address,
        // @ts-ignore
        account: walletClient.account,
        functionName: methodName,
        args: methodArgs,
        gasPrice,
        gas: calculateGasMargin(gas),
        value: 0n,
        ...overrides,
      } as unknown as WriteContractParameters)

      const hash = res

      return {
        hash,
      }
    },
    [chainId, gasPrice, walletClient],
  )

  return { callWithGasPrice: callWithGasPriceWithSimulate }
}
