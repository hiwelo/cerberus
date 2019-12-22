/** Describes the generic structure of a GraphQL edge */
type GenericEdge<T> = {
  /** Item from a GraphQL connection object */
  node: T;
  /** Potential typing for the edge added by GraphQL */
  __typename: string;
};

/** Describes the generic structure of a GraphQL connection object */
export type GenericConnection<T> = {
  edges: GenericEdge<T>[];
};
