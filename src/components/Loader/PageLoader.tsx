import styled from 'styled-components'
import CircleLoader from './CircleLoader'
import Page from '../Layout/Page'

const Wrapper = styled(Page)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const PageLoader: React.FC<React.PropsWithChildren<unknown>> = () => {
  return (
    <Wrapper>
      {/* <Spinner /> */}
      <CircleLoader />
    </Wrapper>
  )
}

export default PageLoader
