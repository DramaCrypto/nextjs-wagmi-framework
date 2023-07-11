import { ChainId } from 'config'
import { getBlockExploreLink, getBlockExploreName } from 'utils'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { BscScanIcon, Link, Text } from 'packages/uikit'
import truncateHash from 'packages/utils/truncateHash'

interface DescriptionWithTxProps {
  description?: string
  txHash?: string
  txChainId?: number
}

const DescriptionWithTx: React.FC<React.PropsWithChildren<DescriptionWithTxProps>> = ({
  txHash,
  txChainId,
  children,
}) => {
  const { chainId } = useActiveChainId()

  return (
    <>
      {typeof children === 'string' ? <Text as="p">{children}</Text> : children}
      {txHash && (
        <Link external href={getBlockExploreLink(txHash, 'transaction', txChainId || chainId)}>
          {`View on ${getBlockExploreName(txChainId || chainId)}': ${truncateHash(txHash, 8, 0)}`}
          {(txChainId || chainId) === ChainId.BSC && <BscScanIcon color="primary" ml="4px" />}
        </Link>
      )}
    </>
  )
}

export default DescriptionWithTx
