import { URI } from './GitHubApi';

/** Represents an object which can take actions on GitHub */
export interface Actor {
  /** A URL pointing to the actor's public avatar */
  avatarUrl: URI;
  /** The username of the actor */
  login: string;
  /** The HTTP URL for this actor */
  url: URI;
}
