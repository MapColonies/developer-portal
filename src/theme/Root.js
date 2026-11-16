import { experimental_extendTheme as extendTheme, Experimental_CssVarsProvider as CssVarsProvider, getInitColorSchemeScript } from '@mui/material';
import React from 'react';
import '@fontsource/archivo/400.css';
import '@fontsource/archivo/600.css';
import '@fontsource/archivo/700.css';
import '@fontsource/archivo/800.css';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/ibm-plex-mono/500.css';

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#ff5252',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#52ffff',
        },
      },
    },
  },
});

function Root({ children }) {
  return (
    <>
      {getInitColorSchemeScript()}
      <CssVarsProvider theme={theme}>{children}</CssVarsProvider>
    </>
  );
}

export default Root;
