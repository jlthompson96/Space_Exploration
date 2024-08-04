import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './components/Header';
import './index.css';


const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8f9cec',
    },
    secondary: {
      main: '#651fff',
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <Header />
  </ThemeProvider>
);

export default App;
