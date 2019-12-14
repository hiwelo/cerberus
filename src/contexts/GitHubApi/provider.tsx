import React, { FunctionComponent } from 'react';
import { GitHubApiContext } from './context';

/**
 * Creates a React Context providing all the required information to use the
 * GitHub API in our components.
 */
export const GitHubApiProvider: FunctionComponent = ({ children }) => {
  const token = process.env.REACT_APP_GH_TOKEN;

  // early-termination with Error if no token provided
  if (!token) {
    throw new Error('Cerberus requires a GitHub Auth token to work.');
  }

  return (
    <GitHubApiContext.Provider
      value={{
        token,
      }}
    >
      {children}
    </GitHubApiContext.Provider>
  );
};
