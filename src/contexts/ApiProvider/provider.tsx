import React, { FunctionComponent } from 'react';
import ApolloClient, { PresetConfig } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

export const ApiProvider: FunctionComponent = ({ children }) => {
  /** Auth token for the GitHub API */
  const token = process.env.REACT_APP_GH_TOKEN;

  // early-termination if no token provided
  if (!token) {
    throw new Error(
      'Cerberus requires a GitHub Token to work provided using the REACT_APP_GH_TOKEN environment variable.',
    );
  }

  /** Auth header to use for each GitHub API requests */
  const authRequest: PresetConfig['request'] = (operation): void => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  };

  /** Configuration for ApolloClient to connect the GitHub API */
  const apiClient = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    request: authRequest,
  });

  return <ApolloProvider client={apiClient}>{children}</ApolloProvider>;
};
