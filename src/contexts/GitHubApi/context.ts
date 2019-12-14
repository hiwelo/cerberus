import { createContext } from 'react';
import { GitHubApi } from './types';

export const GitHubApiContext = createContext<GitHubApi | undefined>(undefined);
