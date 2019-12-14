import { useContext } from 'react';
import { RepositoryQueryVars } from '../../data/repository/types';
import { RepositoryContext } from '.';

/** Returns the name and owner of the repository to use with Cerberus */
export const useRepository = (): RepositoryQueryVars => {
  const repositoryInfo = useContext(RepositoryContext);

  if (!repositoryInfo) {
    throw new Error('Cerberus misses information about the repository to use.');
  }

  return repositoryInfo;
};
