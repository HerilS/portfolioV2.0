import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Gilroy, Sans-Serif
  }
`

export const GlobalTheme = {
  colors: {},
  fonts: ['Gilroy', 'sans-serif', 'Roboto'],
  fontSizes: {},
}
