import { GET_REPOSITORY_QUERY } from '.';
import { Actor } from '../../types/GitHubApi/Actor';
import { Commit } from '../../types/GitHubApi/Commit';
import { DateTime } from '../../types/GitHubApi/GitHubApi';
import { Deployment } from '../../types/GitHubApi/Deployment';
import { PullRequest } from '../../types/GitHubApi/PullRequest';
import { Repository } from '../../types/GitHubApi/Repository';

const MOCKED_AUTHOR: Actor = {
  avatarUrl: 'https://google.com',
  login: 'hiwelo',
  url: 'https://github.com/hiwelo',
};

const MOCKED_PR: PullRequest = {
  author: MOCKED_AUTHOR,
  closed: false,
  locked: false,
  merged: false,
  number: 1,
  permalink: 'https://github.com/hiwelo/cerberus/pull/1',
  title: 'Pull Request',
  url: 'https://github.com/hiwelo/cerberus/pull/1',
};

const MOCKED_COMMIT: Commit = {
  abbreviatedOid: 'a9eb85e',
  associatedPullRequests: {
    edges: [
      {
        __typename: 'PullRequestEdge',
        node: MOCKED_PR,
      },
    ],
  },
  message: 'Hello World',
  messageBody: 'Hello World',
  messageHeadline: 'Hello World',
  oid: 'a9eb85ea214a6cfa6882f4be041d5cce7bee3e45',
};

const MOCKED_DATE: DateTime = '2019-12-18T11:19:30+0000';

const MOCKED_DEPLOYMENT: Deployment = {
  commit: MOCKED_COMMIT,
  commitOid: MOCKED_COMMIT.oid,
  creator: MOCKED_AUTHOR,
  description: 'Deployment description',
  environment: 'Test',
  latestStatus: {
    creator: MOCKED_AUTHOR,
    description: 'Status description',
    environmentUrl: 'https://google.com',
    state: 'SUCCESS',
    updatedAt: MOCKED_DATE,
  },
  state: 'ACTIVE',
  task: '',
  updatedAt: MOCKED_DATE,
};

const MOCKED_REPOSITORY: Repository = {
  deployments: {
    edges: [
      {
        __typename: 'DeploymentEdge',
        node: MOCKED_DEPLOYMENT,
      },
    ],
  },
  description: 'Repository description',
  id: 'Repository ID',
  name: 'Repository name',
  owner: MOCKED_AUTHOR,
  pullRequests: {
    edges: [
      {
        __typename: 'PullRequestEdge',
        node: MOCKED_PR,
      },
    ],
  },
  url: 'https://github.com/hiwelo/cerberus',
};

export const MOCK_REPOSITORY_QUERY = [
  {
    request: {
      query: GET_REPOSITORY_QUERY,
      variables: {
        name: 'cerberus',
        owner: 'hiwelo',
        count: '1',
        countPR: '1',
      },
    },
    result: {
      data: {
        repository: MOCKED_REPOSITORY,
      },
    },
  },
];
