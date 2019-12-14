import { DeploymentEdge } from '../../data/repository/types';

export interface DeploymentListProps {
  /** List of deployments to display */
  deployments: DeploymentEdge[];
}
