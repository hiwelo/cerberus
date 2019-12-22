import React, { FunctionComponent } from 'react';
import { DeploymentCard } from 'components';
import { DeploymentListProps } from './types';

export const DeploymentList: FunctionComponent<DeploymentListProps> = ({
  list,
}) => {
  return (
    <ul>
      {list.edges.map(deployment => (
        <li key={deployment.node.commitOid}>
          <DeploymentCard item={deployment.node} />
        </li>
      ))}
    </ul>
  );
};
