import { DeploymentConnection } from '../../types/GitHubApi/Deployment';

export interface DeploymentListProps {
  /** List of deployments to display */
  list: DeploymentConnection;
}
