import React, { FunctionComponent } from 'react';
import { PullRequestCard } from 'components';
import { List, ListItem } from './components';
import { PullRequestListProps } from './types';

export const PullRequestList: FunctionComponent<PullRequestListProps> = ({
  list,
}) => {
  const pullRequestEdges = list.edges;
  const pullRequestList = pullRequestEdges.map(edge => edge.node);

  return (
    <List>
      {pullRequestList.map(pullRequest => (
        <ListItem key={pullRequest.number}>
          <PullRequestCard item={pullRequest} />
        </ListItem>
      ))}
    </List>
  );
};
