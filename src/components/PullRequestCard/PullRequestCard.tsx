import React, { FunctionComponent } from 'react';
import { Link } from '..';
import { PullRequestCardProps } from './types';
import {
  Card,
  CardContent,
  CardHeader,
  CardInfoLabel,
  CardInfoList,
  CardInfoValue,
  CardLink,
  CardTitle,
} from './components';

export const PullRequestCard: FunctionComponent<PullRequestCardProps> = ({
  item,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{item.title}</CardTitle>
        <CardLink href={item.url} target="_blank">
          #{item.number}
        </CardLink>
      </CardHeader>
      <CardContent>
        <CardInfoList>
          <CardInfoLabel>Author</CardInfoLabel>
          <CardInfoValue>
            <Link href={item.author.url} target="_blank">
              {item.author.login}
            </Link>
          </CardInfoValue>
          <CardInfoLabel>Deployments</CardInfoLabel>
        </CardInfoList>
      </CardContent>
    </Card>
  );
};
