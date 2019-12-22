import React, { FunctionComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import { FontLoader } from 'components';
import themes from 'themes';
import { GlobalStyles } from './components';

export const BaseStyles: FunctionComponent = ({ children }) => (
  <ThemeProvider theme={themes.default}>
    <>
      <FontLoader />
      <GlobalStyles />
      {children}
    </>
  </ThemeProvider>
);
