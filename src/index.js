import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import App from "./App";

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, helvetica, sans-serif',
    color: "#282828"
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
