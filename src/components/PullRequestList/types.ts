import { PullRequestConnection } from '../../data/repository/types';

export interface PullRequestListProps {
  /** List of deployments to display */
  list: PullRequestConnection;
}
