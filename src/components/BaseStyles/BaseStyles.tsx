import React, { FunctionComponent } from 'react';
import { FontLoader } from '../FontLoader';
import { GlobalStyles } from './components';

export const BaseStyles: FunctionComponent = ({ children }) => (
  <>
    <FontLoader />
    <GlobalStyles />
    {children}
  </>
);
