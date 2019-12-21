/** Describes the generic structure of a GraphQL edge */
type GenericEdge<T> = {
  /** Item from a GraphQL connection object */
  node: T;
  /** Potential typing for the edge added by GraphQL */
  __typename: string;
};

/** Describes the generic structure of a GraphQL connection object */
type GenericConnection<T> = {
  edges: GenericEdge<T>[];
};

/**
 * Returns an array of all nodes contained in the provided GraphQL connection
 * object
 *
 * @param connection GraphQL connection object containing the nodes to return
 */
export function listNodesFromConnection<T>(
  connection?: GenericConnection<T>,
): T[] | undefined {
  return connection?.edges.map(({ node }) => node);
}
