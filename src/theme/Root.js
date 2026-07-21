import { experimental_extendTheme as extendTheme, Experimental_CssVarsProvider as CssVarsProvider, getInitColorSchemeScript } from '@mui/material';
import React from 'react';
import AskAI from '@site/src/components/AskAI';

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
      <CssVarsProvider theme={theme}>
        {children}
        <AskAI />
      </CssVarsProvider>
    </>
  );
}

export default Root;
