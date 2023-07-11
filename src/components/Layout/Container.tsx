import { Box, BoxProps } from 'packages/uikit'

const Container: React.FC<React.PropsWithChildren<BoxProps>> = ({ children, ...props }) => (
  <Box px={['16px', '24px']} mx="auto" maxWidth="1200px" {...props}>
    {children}
  </Box>
)

export default Container
