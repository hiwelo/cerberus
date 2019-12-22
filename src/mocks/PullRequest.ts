import {
  PullRequest,
  PullRequestConnection,
} from 'types/GitHubApi/PullRequest';
import { mockedActor, mockedCommit, mockedDeployment } from '.';

export const mockedPullRequest: PullRequest = {
  author: mockedActor,
  closed: false,
  locked: false,
  merged: false,
  number: 123,
  permalink: 'https://github.com/owner/repository/pull/123',
  title: 'Test of pull request',
  url: 'https://github.com/owner/repository/pull/123',
  commits: {
    edges: [
      {
        __typename: 'CommitEdge',
        node: {
          commit: {
            ...mockedCommit,
            deployments: {
              edges: [
                {
                  __typename: 'DeploymentEdge',
                  node: mockedDeployment,
                },
              ],
            },
          },
        },
      },
    ],
  },
};

export const mockedPullRequestConnection: PullRequestConnection = {
  edges: [
    {
      __typename: 'PullRequestEdge',
      node: mockedPullRequest,
    },
  ],
};
