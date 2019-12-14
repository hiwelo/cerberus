import React, { FunctionComponent } from 'react';
import { PullRequestCard } from '../PullRequestCard';
import { PullRequestListProps } from './types';

export const PullRequestList: FunctionComponent<PullRequestListProps> = ({
  list,
}) => {
  return (
    <ul>
      {list.edges.map(pullRequest => (
        <li key={pullRequest.node.number}>
          <PullRequestCard item={pullRequest.node} />
        </li>
      ))}
    </ul>
  );
};
