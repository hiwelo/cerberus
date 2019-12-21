import React, { FunctionComponent } from 'react';
import { Link } from '..';
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
          <Link href={item.url} target="_blank">
            #{item.number}
          </Link>
        </CardInfoValue>
        <CardInfoLabel>Author</CardInfoLabel>
        <CardInfoValue>
          <Link href={item.author.url} target="_blank">
            {item.author.login}
          </Link>
        </CardInfoValue>
      </CardInfoList>
      <CardDeployments pullRequest={item} />
    </Card>
  );
};
