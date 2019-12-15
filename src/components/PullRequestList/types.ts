import { PullRequestConnection } from '../../types/GitHubApi/PullRequest';

export interface PullRequestListProps {
  /** List of deployments to display */
  list: PullRequestConnection;
}
