import { createTheme, ThemeProvider } from '@mui/material/styles';
import NasaApod from './components/APOD';
import MarsPhotos from './components/MarsPhotos';


const theme = createTheme({
  palette: {
    primary: {
      main: '#1e88e5',
    },
    secondary: {
      main: '#ff4081',
    },
    background: {
      default: '#0d47a1',
      paper: '#1a237e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#bbdefb',
    },
  },
  typography: {
    fontFamily: 'Roboto, Open Sans, sans-serif',
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <NasaApod />
    <MarsPhotos />
  </ThemeProvider>
);

export default App;
