import React, { FunctionComponent } from 'react';
import { StyledLink } from 'components';
import { PullRequestCardProps } from './types';
import {
  Card,
  CardDeployments,
  CardHeader,
  CardInfoLabel,
  CardInfoList,
  CardInfoValue,
  CardTitle,
} from './components';

export const PullRequestCard: FunctionComponent<PullRequestCardProps> = ({
  item,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{item.title}</CardTitle>
      </CardHeader>
      <CardInfoList>
        <CardInfoLabel>PR</CardInfoLabel>
        <CardInfoValue>
          <StyledLink href={item.url} target="_blank">
            #{item.number}
          </StyledLink>
        </CardInfoValue>
        <CardInfoLabel>Author</CardInfoLabel>
        <CardInfoValue>
          <StyledLink href={item.author.url} target="_blank">
            {item.author.login}
          </StyledLink>
        </CardInfoValue>
      </CardInfoList>
      <CardDeployments pullRequest={item} />
    </Card>
  );
};
