import { useContext } from 'react';
import { GitHubApiContext } from './context';
import { GitHubApi } from './types';

/**
 * Returns all information needed to use the GitHub API
 */
export function useGitHubApi(): GitHubApi {
  const gitHubApi = useContext(GitHubApiContext);

  if (!gitHubApi) {
    throw new Error('No GitHub API context was provided.');
  }

  return gitHubApi;
}
