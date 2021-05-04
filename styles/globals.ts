import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Gilroy, Sans-Serif, Roboto
  }
`

export const GlobalTheme = {
  colors: {
    main: '#EB867F',
    black: '#000000',
    grey: '#868686',
    greyBackground: '#F9F9F9',
    white: '#FFFFFF',
  },
  fonts: ['Gilroy', 'sans-serif', 'Roboto'],
  breakpoints: {
    xl: '1024px', //min-width
    lg: '768px', //min-width
    sm: '767px', //max-width
  },
  fontSizes: {},
}
