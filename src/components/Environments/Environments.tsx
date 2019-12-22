import React, { FunctionComponent } from 'react';
import { PullRequest } from 'types/GitHubApi/PullRequest';
import { listNodesFromConnection } from 'utilities';
import { Container, EnvironmentButton, Item, List } from './components';

interface EnvironmentsProps {
  /** Pull request related to the environments to list */
  pullRequest: PullRequest;
}

/**
 * Provides a list of link buttons to access the different environments
 * associated with the latest commit of the provided pull request
 */
export const Environments: FunctionComponent<EnvironmentsProps> = ({
  pullRequest,
}) => {
  // early-termination if there is no commit connection attached to the provided PR
  if (!pullRequest.commits) return null;

  /** List of GraphQL nodes containing the commits associated to the provided PR */
  const commitNodes = listNodesFromConnection(pullRequest.commits);

  /** List of commits associated to the provided PR */
  const commits = commitNodes?.map(node => node.commit);

  // early-termination if there is no commits attached to the provided PR
  if (!commits?.length) return null;

  /** Latest commit associted to the provided PR */
  const lastCommit = commits[0];

  /** List all deployments associated with the latest commit in the PR */
  const deployments = listNodesFromConnection(lastCommit.deployments);

  // early-termination if there is no environments to display
  if (!deployments) return null;

  return (
    <Container>
      <List>
        {deployments.map((deployment, index) => (
          <Item key={`${deployment.commitOid}-${index}`}>
            <EnvironmentButton href={deployment.latestStatus.environmentUrl}>
              {deployment.environment}
            </EnvironmentButton>
          </Item>
        ))}
      </List>
    </Container>
  );
};
