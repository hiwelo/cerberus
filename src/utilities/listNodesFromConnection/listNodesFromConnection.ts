import { GenericConnection } from './types';

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
