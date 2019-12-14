export interface UserInfoQuery {
  /** Information about the owner of the auth token */
  viewer: {
    /** Login of the owner of the auth token */
    login: string;
    /** Name of the owner of the auth token */
    name: string;
  };
}
