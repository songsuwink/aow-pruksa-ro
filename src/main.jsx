import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: ["'Prompt', sans-serif"].join(','),
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
