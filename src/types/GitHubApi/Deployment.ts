import { Actor } from './Actor';
import { Commit } from './Commit';
import { DateTime, URI } from './GitHubApi';

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

/** The connection type for Deployment */
export interface DeploymentConnection {
  edges: DeploymentEdge[];
}

/** A deployment node in a connection */
export interface DeploymentEdge {
  __typename: 'DeploymentEdge';
  node: Deployment;
}
