import React, { FunctionComponent } from 'react';
import { PullRequestCardProps } from './types';

export const PullRequestCard: FunctionComponent<PullRequestCardProps> = ({
  item,
}) => {
  return <>{item.number}</>;
};
