import { Actor } from './Actor';
import { CommitConnection } from './Commit';
import { URI } from './GitHubApi';

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
  /** The body rendered to text */
  bodyText?: string;
  /** A list of commits present in this pull request's head branch not present in the base branch */
  commits?: CommitConnection;
}

/** The connection type for PullRequest */
export interface PullRequestConnection {
  edges: PullRequestEdge[];
}

/** A pull request node in a connection */
export interface PullRequestEdge {
  __typename: 'PullRequestEdge';
  node: PullRequest;
}
