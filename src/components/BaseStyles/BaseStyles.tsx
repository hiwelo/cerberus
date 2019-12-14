import React, { FunctionComponent } from 'react';
import { GlobalStyles } from './components';

export const BaseStyles: FunctionComponent = ({ children }) => (
  <>
    <GlobalStyles />
    {children}
  </>
);
