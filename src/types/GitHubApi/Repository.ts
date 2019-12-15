import { Actor } from './Actor';
import { DeploymentConnection } from './Deployment';
import { PullRequestConnection } from './PullRequest';
import { URI } from './GitHubApi';

/** Repository used for this current Ceberus page */
export interface Repository {
  /** Deployments associated with the repository */
  deployments: DeploymentConnection;
  /** Description of the repository */
  description: string;
  /** Unique identifier for this repository */
  id: string;
  /** Name of the repository */
  name: string;
  /** User owner of the repository */
  owner: Actor;
  /** A list of pull requests that have been opened in the repository */
  pullRequests: PullRequestConnection;
  /** HTTP URL for this repository */
  url: URI;
}
