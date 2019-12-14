import React, { FunctionComponent } from 'react';
import { RepositoryContext } from '.';

const REPO_ERROR_MSG =
  'You need to provide a valid repository identifier to use Cerberus using the REACT_APP_REPOSITORY environment variable (e.g. owner/reponame).';

/** Provides a React Context to every components containing the name and owner of repository to use with Cerberus */
export const RepositoryProvider: FunctionComponent = ({ children }) => {
  const providedRepository = process.env.REACT_APP_REPOSITORY;

  // early-termination if there is no provided repository
  if (!providedRepository) throw new Error(REPO_ERROR_MSG);

  // Name and owner of the repository, extracted from the provided repository identifier
  const [repoName, repoOwner] = providedRepository.split('/', 2);

  // early-termination if we can't identify a name and owner from the provided repository info
  if (!repoName || !repoOwner) throw new Error(REPO_ERROR_MSG);

  return (
    <RepositoryContext.Provider
      value={{
        name: repoName,
        owner: repoOwner,
      }}
    >
      {children}
    </RepositoryContext.Provider>
  );
};
