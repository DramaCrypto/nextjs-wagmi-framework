import React from 'react'
import { Provider } from 'react-redux'
import { Store } from '@reduxjs/toolkit'
import { ThemeProvider as NextThemeProvider, useTheme as useNextTheme } from 'next-themes'
import { SWRConfig } from 'swr'
import { WagmiConfig } from 'wagmi'
import { StateContextProvider } from 'contexts/StateContext'
import { fetchStatusMiddleware } from 'hooks/useSWRContract'
import { LanguageProvider } from 'packages/localization'
import { ModalProvider, UIKitProvider, light, dark } from 'packages/uikit'
import { wagmiConfig } from 'utils/wagmi'


const StyledUIKitProvider: React.FC<React.PropsWithChildren> = ({ children, ...props }) => {
  const { resolvedTheme } = useNextTheme()
  return (
    // <UIKitProvider theme={resolvedTheme === 'dark' ? dark : light} {...props}>
    <UIKitProvider theme={light} {...props}>
      {children}
    </UIKitProvider>
  )
}

const Providers: React.FC<React.PropsWithChildren<{
  store: Store; children: React.ReactNode
}>> = ({ store, children }) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <Provider store={store}>
        <NextThemeProvider>
          <StateContextProvider>
            <StyledUIKitProvider>
              <LanguageProvider>
                <SWRConfig
                  value={{
                    use: [fetchStatusMiddleware],
                  }}
                >
                  <ModalProvider>
                    {children}
                  </ModalProvider>
                </SWRConfig>
              </LanguageProvider>
            </StyledUIKitProvider>
          </StateContextProvider>
        </NextThemeProvider>
      </Provider>
    </WagmiConfig>
  )
}

export default Providers
