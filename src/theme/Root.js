import { experimental_extendTheme as extendTheme, Experimental_CssVarsProvider as CssVarsProvider, getInitColorSchemeScript } from '@mui/material';
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ErrorBoundary from '@docusaurus/ErrorBoundary';
import AzimuthAI from '@site/src/components/AzimuthAI';

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
  const { siteConfig } = useDocusaurusContext();
  const azimuth = siteConfig.customFields?.azimuth;
  return (
    <>
      {getInitColorSchemeScript()}
      <CssVarsProvider theme={theme}>{children}</CssVarsProvider>
      {/* off unless the build opted in (AZIMUTH_ENABLED=true); a widget failure must never take the portal down */}
      {azimuth?.enabled && azimuth.endpoint ? (
        <ErrorBoundary fallback={() => null}>
          <AzimuthAI endpoint={azimuth.endpoint} />
        </ErrorBoundary>
      ) : null}
    </>
  );
}

export default Root;
