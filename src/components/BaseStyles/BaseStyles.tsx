import React, { FunctionComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import themes from '../../themes';
import { FontLoader } from '../FontLoader';
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
