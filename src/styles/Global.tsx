import { createGlobalStyle } from 'styled-components'
import { PancakeTheme } from 'packages/uikit'

// @ts-ignore
declare module 'styled-components' {
  export interface DefaultTheme extends PancakeTheme { }
}

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  h1,
  h2,
  p,
  ul {
    margin: 0;
  }

  ul {
    padding: 0;
    list-style: none;
  }

  button {
    padding: 0.5rem 1rem;
    font-weight: bold;
  }

  * {
    font-family: 'Kanit', sans-serif;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }

  nextjs-portal {
    display: none;
  }

  #__next {
    position: relative;
    z-index: 1;
  }

  #portal-root {
    position: relative;
    z-index: 2;
  }
`

export default GlobalStyle
