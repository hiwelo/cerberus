import React, { FunctionComponent } from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { MOCK_REPOSITORY_QUERY } from '../../data/repository';

export const TestProvider: FunctionComponent = ({ children }) => {
  return (
    <React.StrictMode>
      <MockedProvider mocks={[...MOCK_REPOSITORY_QUERY]} addTypename={false}>
        <>{children}</>
      </MockedProvider>
    </React.StrictMode>
  );
};
