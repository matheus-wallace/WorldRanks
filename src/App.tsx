import { ThemeProvider } from 'styled-components';
import theme from './styles/Theme/Theme';
import GlobalStyle from './styles/Theme/GlobalStyles';
import { Reset } from './styles/Theme/Reset';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Reset />
        <div>ola ranks</div>
      </ThemeProvider>
    </>
  );
}

export default App;
