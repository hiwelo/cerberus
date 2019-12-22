import React, { FunctionComponent } from 'react';
import { DeploymentProps } from './types';

export const DeploymentCard: FunctionComponent<DeploymentProps> = ({
  item,
}) => {
  return <span>{item.task}</span>;
};
