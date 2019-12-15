import React, { FunctionComponent } from 'react';
import { Link } from '..';
import { PullRequestCardProps } from './types';
import {
  Card,
  CardContent,
  CardHeader,
  CardHeaderSuffix,
  CardInfoLabel,
  CardInfoList,
  CardInfoValue,
} from './components';

export const PullRequestCard: FunctionComponent<PullRequestCardProps> = ({
  item,
}) => {
  return (
    <>
      <Card>
        <CardHeader>
          <Link href={item.url} target="_blank">
            {item.title}
            <CardHeaderSuffix>#{item.number}</CardHeaderSuffix>
          </Link>
        </CardHeader>
        <CardContent>{item.bodyText.slice(0, 140)}…</CardContent>
        <CardInfoList>
          <CardInfoLabel>Author</CardInfoLabel>
          <CardInfoValue>
            <Link href={item.author.url} target="_blank">
              {item.author.login}
            </Link>
          </CardInfoValue>
          <CardInfoLabel>Deployments</CardInfoLabel>
          {item.commits?.edges.map(({ node }) => {
            const { commit } = node;

            return (
              <>
                {commit.deployments?.edges.map(({ node }) => (
                  <>
                    <CardInfoValue>
                      <Link
                        href={node.latestStatus.environmentUrl}
                        target="_blank"
                      >
                        {node.description}
                      </Link>
                    </CardInfoValue>
                  </>
                ))}
              </>
            );
          })}
        </CardInfoList>
      </Card>
    </>
  );
};
