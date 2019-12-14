import React, { FunctionComponent } from 'react';
import { DeploymentListProps } from './types';
import { DeploymentCard } from '../DeploymentCard';

export const DeploymentList: FunctionComponent<DeploymentListProps> = ({
  deployments,
}) => {
  return (
    <ul>
      {deployments.map(deployment => (
        <li key={deployment.node.commitOid}>
          <DeploymentCard item={deployment.node} />
        </li>
      ))}
    </ul>
  );
};
