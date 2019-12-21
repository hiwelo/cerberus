import React, { FunctionComponent, StrictMode } from 'react';
import { BaseStyles } from '../BaseStyles';

/**
 * This component creates a series of context needed to run the tests of our
 * components.
 */
export const TestProvider: FunctionComponent = ({ children }) => {
  return (
    <StrictMode>
      <BaseStyles>{children}</BaseStyles>
    </StrictMode>
  );
};
