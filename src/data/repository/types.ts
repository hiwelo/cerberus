/** Repository used for this current Ceberus page */
export interface Repository {
  /** Description of the repository */
  description: string;
  /** Unique identifier for this repository */
  id: string;
  /** Name of the repository */
  name: string;
  /** User owner of the repository */
  owner: {
    /** Avatar of the owner of the repository */
    avatarUrl: string;
    /** Unique identifier for the owner of the repository */
    id: string;
    /** Login of the owner of the repository */
    login: string;
    /** URL of the GitHub profile of the owner of the repository */
    url: string;
  };
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
}
