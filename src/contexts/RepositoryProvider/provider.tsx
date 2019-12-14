import React, { FunctionComponent } from 'react';
import { RepositoryContext } from '.';

/** Default number of deployment to display */
const DEFAULT_COUNT = 5;
/** Default number of open pull requests to display */
const DEFAULT_PR_COUNT = 25;
/** Key of the environment variable containing the repository */
const ENV_VAR_REPOSITORY = 'REACT_APP_REPOSITORY';
/** Key of the environment variable containing the max number of deployments */
const ENV_VAR_DEPLOYMENTS = 'REACT_APP_DEPLOYMENTS';
/** Key of the environment variable containing the max number of pull requests */
const ENV_VAR_PULL_REQUESTS = 'REACT_APP_PULL_REQUESTS';
/** Error message if there is no valid repository provided */
const REPO_ERROR_MSG = `You need to provide a valid repository identifier to use Cerberus using the ${ENV_VAR_REPOSITORY} environment variable (e.g. owner/reponame).`;

/** Provides a React Context to every components containing the name and owner of repository to use with Cerberus */
export const RepositoryProvider: FunctionComponent = ({ children }) => {
  // gets all variable from the environment and parse if needed
  const providedRepository = process.env[ENV_VAR_REPOSITORY];
  const deploymentCountFromEnv = process.env[ENV_VAR_DEPLOYMENTS];
  const pullRequestsCountFromEnv = process.env[ENV_VAR_PULL_REQUESTS];
  const deploymentCount = deploymentCountFromEnv
    ? parseInt(deploymentCountFromEnv)
    : DEFAULT_COUNT;
  const pullRequestCount = pullRequestsCountFromEnv
    ? parseInt(pullRequestsCountFromEnv)
    : DEFAULT_PR_COUNT;

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
        countPR: pullRequestCount,
      }}
    >
      {children}
    </RepositoryContext.Provider>
  );
};
