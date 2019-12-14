import { createContext } from 'react';
import { RepositoryQueryVars } from '../../data/repository/types';

export default createContext<RepositoryQueryVars | undefined>(undefined);
