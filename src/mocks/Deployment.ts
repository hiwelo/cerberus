import { Deployment, DeploymentConnection } from 'types/GitHubApi/Deployment';
import { mockedActor } from './Actor';
import { mockedCommit } from './Commit';

export const mockedDeployment: Deployment = {
  commit: mockedCommit,
  commitOid: '7638417db6d59f3c431d3e1f261cc637155684cd',
  creator: mockedActor,
  description: 'Test deployment',
  environment: 'test',
  latestStatus: {
    creator: mockedActor,
    description: 'Test environment',
    environmentUrl: 'https://example.com/',
    state: 'SUCCESS',
    updatedAt: '2019-12-20T20:11:45+00:00',
  },
  state: 'ACTIVE',
  task: 'deploy',
  updatedAt: '2019-12-20T20:11:45+00:00',
};

export const mockedDeploymentConnection: DeploymentConnection = {
  edges: [
    {
      __typename: 'DeploymentEdge',
      node: mockedDeployment,
    },
  ],
};
