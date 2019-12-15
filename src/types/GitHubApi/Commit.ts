import { DeploymentConnection } from './Deployment';
import { PullRequestConnection } from './PullRequest';

export interface Commit {
  /** An abbreviated version of the Git object ID */
  abbreviatedOid: string;
  /** The Git commit message */
  message: string;
  /** The Git commit message body */
  messageBody: string;
  /** The Git commit message headline */
  messageHeadline: string;
  /** The Git object ID */
  oid: string;
  /** The pull requests associated with a commit */
  associatedPullRequests?: PullRequestConnection;
  /** The deployments associated with a commit */
  deployments?: DeploymentConnection;
}

/** The connection type for Commit */
export interface CommitConnection {
  edges: CommitEdge[];
}

/** A commit node in a connection */
export interface CommitEdge {
  __typename: 'CommitEdge';
  node: {
    commit: Commit;
  };
}
