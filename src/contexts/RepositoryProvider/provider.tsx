import React, { FunctionComponent } from 'react';
import { RepositoryContext } from '.';

const REPO_ERROR_MSG =
  'You need to provide a valid repository identifier to use Cerberus using the REACT_APP_REPOSITORY environment variable (e.g. owner/reponame).';

/** Default number of deployment to display */
const DEFAULT_COUNT = 5;

/** Provides a React Context to every components containing the name and owner of repository to use with Cerberus */
export const RepositoryProvider: FunctionComponent = ({ children }) => {
  const providedRepository = process.env.REACT_APP_REPOSITORY;
  const deploymentCount = process.env.REACT_APP_DEPLOYMENTS
    ? parseInt(process.env.REACT_APP_DEPLOYMENTS)
    : DEFAULT_COUNT;

  // early-termination if there is no provided repository
  if (!providedRepository) throw new Error(REPO_ERROR_MSG);

  // Name and owner of the repository, extracted from the provided repository identifier
  const [repoOwner, repoName] = providedRepository.split('/', 2);

  // early-termination if we can't identify a name and owner from the provided repository info
  if (!repoName || !repoOwner) throw new Error(REPO_ERROR_MSG);

  return (
    <RepositoryContext.Provider
      value={{
        name: repoName,
        owner: repoOwner,
        count: deploymentCount,
      }}
    >
      {children}
    </RepositoryContext.Provider>
  );
};
