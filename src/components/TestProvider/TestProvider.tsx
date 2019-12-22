import React, { Fragment, FunctionComponent, StrictMode } from 'react';
import { BaseStyles } from 'components';
import { TestProviderProps } from './types';

/**
 * This component creates a series of context needed to run the tests of our
 * components.
 */
export const TestProvider: FunctionComponent<TestProviderProps> = ({
  children,
  strict,
}) => {
  const WrapperElement = strict ? StrictMode : Fragment;

  return (
    <WrapperElement>
      <BaseStyles>{children}</BaseStyles>
    </WrapperElement>
  );
};
