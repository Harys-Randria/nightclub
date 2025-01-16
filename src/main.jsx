import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Import des polices
import '@fontsource/bebas-neue'; // Bebas Neue pour les titres
import '@fontsource/open-sans/400.css'; // Open Sans normal
import '@fontsource/open-sans/600.css'; // Open Sans semi-bold

// Configuration du thème
const theme = createTheme({
  typography: {
    fontFamily: `'Open Sans', 'Arial', sans-serif`, // Texte par défaut
    h1: {
      fontFamily: `'Bebas Neue', sans-serif`,
      fontWeight: 700,
      fontSize: '2.5rem',
      textTransform: 'uppercase',
    },
    h2: {
      fontFamily: `'Bebas Neue', sans-serif`,
      fontWeight: 700,
      fontSize: '2rem',
      textTransform: 'uppercase',
    },
    body1: {
      fontFamily: `'Open Sans', sans-serif`,
      fontWeight: 400,
    },
    button: {
      fontFamily: `'Bebas Neue', sans-serif`,
      textTransform: 'uppercase',
    },
  },
});

// Rendu principal
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Réinitialise les styles globaux */}
      <App />
    </ThemeProvider>
  </StrictMode>
);
