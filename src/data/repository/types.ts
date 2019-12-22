import { Repository } from 'types/GitHubApi/Repository';

/** Result of the GraphQL query for the repository information */
export interface RepositoryData {
  /** Lookup a given repository by the owner and repository name */
  repository: Repository;
}

/** Vars required by the GraphQL query for the repository information */
export interface RepositoryQueryVars {
  /** Number of deployment to display */
  count: number;
  /** Number of open pull requests to display */
  countPR: number;
  /** Name of the repository to look for */
  name: string;
  /** Owner of the repository to look for */
  owner: string;
}
