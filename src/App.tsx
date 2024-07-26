import { createTheme, ThemeProvider } from '@mui/material/styles';
import NasaApod from './components/APOD';
import Header from './components/Header';
import './index.css'; // Ensure this line is present to import the CSS file


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
    <NasaApod />
  </ThemeProvider>
);

export default App;
