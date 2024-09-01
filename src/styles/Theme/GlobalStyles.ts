import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle` 
  body {
  font-family: 'Be Vietnam Pro', Arial, Helvetica, sans-serif;
  background-color: ${({ theme }) => theme.darkTheme.background};
  color: ${({ theme }) => theme.darkTheme.lightGray}
  }

`;

export default GlobalStyle;
