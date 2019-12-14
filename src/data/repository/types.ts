/** Represents a Git commit */
type Commit = {
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
  associatedPullRequests?: {
    edges: PullRequestEdge[];
  };
};

/** The connection type for PullRequestCommit */
type CommitConnection = {
  /** A list of edges */
  edges: CommitEdge;
};

/** An edge in a connection */
type CommitEdge = {
  /** The item at the end of the edge */
  node: {
    commit: Commit;
  };
};

/** An ISO-8601 encoded UTC date string */
type DateTime = string;

/** The possible states in which a deployment can be. */
type DeploymentState =
  | 'ABANDONED' // The pending deployment was not updated after 30 minutes
  | 'ACTIVE' // The deployment is currently active
  | 'DESTROYED' // An inactive transient deployment
  | 'ERROR' // The deployment experienced an error
  | 'FAILURE' // The deployment has failed
  | 'INACTIVE' // The deployment is inactive
  | 'PENDING' // The deployment is pending
  | 'QUEUED' // The deployment has queued
  | 'IN_PROGRESS'; // The deployment is in progress

/** Describes the status of a given deployment attempt */
type DeploymentStatus = {
  /** Identifies the actor who triggered the deployment */
  creator: Actor;
  /** Identifies the description of the deployment */
  description: string;
  /** Identifies the environment URL of the deployment */
  environmentUrl: URI;
  /** Identifies the current state of the deployment */
  state: DeploymentStatusState;
  /** Identifies the date and time when the object was last updated */
  updatedAt: DateTime;
};

/** The possible states for a deployment status */
type DeploymentStatusState =
  | 'PENDING' // The deployment is pending
  | 'SUCCESS' // The deployment was successful
  | 'FAILURE' // The deployment has failed
  | 'INACTIVE' // The deployment is inactive
  | 'ERROR' // The deployment experienced an error
  | 'QUEUED' // The deployment is queued
  | 'IN_PROGRESS'; // The deployment is in progress

type PullRequestEdge = {
  __typename: 'PullRequestEdge';
  node: PullRequest;
};

/** An RFC 3986, RFC 3987, and RFC 6570 (level 4) compliant URI string */
type URI = string;

/** Represents an object which can take actions on GitHub */
export interface Actor {
  /** A URL pointing to the actor's public avatar */
  avatarUrl: URI;
  /** The username of the actor */
  login: string;
  /** The HTTP URL for this actor */
  url: URI;
}

/** Represents triggered deployment instance */
export interface Deployment {
  /** Identifies the oid of the deployment commit, even if the commit has been deleted */
  commitOid: string;
  /** Identifies the actor who triggered the deployment */
  creator: Actor;
  /** The deployment description */
  description: string;
  /** The environment to which this deployment was made */
  environment: string;
  /** The latest status of this deployment */
  latestStatus: DeploymentStatus;
  /** The current state of the deployment */
  state: DeploymentState;
  /** The deployment task */
  task: string;
  /** Identifies the date and time when the object was last updated */
  updatedAt: DateTime;
  /** Identifies the commit sha of the deployment */
  commit?: Commit;
}

export interface DeploymentEdge {
  __typename: 'DeploymentEdge';
  node: Deployment;
}

/** A repository pull request */
export interface PullRequest {
  /** The actor who authored the comment */
  author: Actor;
  /** true if the pull request is closed */
  closed: boolean;
  /** true if the pull request is locked */
  locked: boolean;
  /** Whether or not the pull request was merged */
  merged: boolean;
  /** Identifies the pull request number */
  number: number;
  /** The permalink to the pull request */
  permalink: URI;
  /** Identifies the pull request title */
  title: string;
  /** The HTTP URL for this pull request */
  url: URI;
  /** A list of commits present in this pull request's head branch not present in the base branch */
  commits?: CommitConnection;
}

/** The connection type for PullRequest */
export interface PullRequestConnection {
  edges: PullRequestEdge[];
}

/** Repository used for this current Ceberus page */
export interface Repository {
  /** Deployments associated with the repository */
  deployments: {
    edges: DeploymentEdge[];
  };
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
  url: string;
}

/** Result of the GraphQL query for the repository information */
export interface RepositoryData {
  /** Lookup a given repository by the owner and repository name */
  repository: Repository;
}

/** Vars required by the GraphQL query for the repository information */
export interface RepositoryQueryVars {
  /** Name of the repository to look for */
  name: string;
  /** Owner of the repository to look for */
  owner: string;
  /** Number of deployment to display */
  count: number;
  /** Number of open pull requests to display */
  countPR: number;
}
