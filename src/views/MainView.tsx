import React, { FunctionComponent, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { ThemeContext } from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { RepositoryData, RepositoryQueryVars } from 'data/repository/types';
import {
  DeploymentList,
  Layout,
  PullRequestList,
  Header,
  Tabs,
} from 'components';
import { useRepository } from 'contexts';
import { repositoryQuery } from 'data';

/**
 * Defines the content for the main view of the Cerberus application
 */
const MainView: FunctionComponent = () => {
  const theme = useContext(ThemeContext);
  const repositoryQueryVars = useRepository();

  // fetches all information about the repository
  const { loading, data } = useQuery<RepositoryData, RepositoryQueryVars>(
    repositoryQuery,
    { variables: repositoryQueryVars },
  );

  // early-termination if data is loading
  if (loading) return null;

  // early-termination if after loading there is no data
  if (!data) return null;

  // gets a series of information from the GitHub API query
  const { repository } = data;
  const { deployments, pullRequests } = repository;

  // prepares the title used for this view
  const viewTitle = `Latest deployments for ${repository.owner.login}/${repository.name}`;

  return (
    <>
      <Helmet title={`${viewTitle} by Cerberus`}>
        <meta name="theme-color" content={theme.palette.tertiary} />
      </Helmet>
      <Layout>
        <Header>{viewTitle}</Header>
        <Tabs
          tabs={{
            pullRequests: {
              content: <PullRequestList list={pullRequests} />,
              label: 'Open pull requests',
            },
            deployments: {
              content: <DeploymentList list={deployments} />,
              label: 'Latest deployments',
            },
          }}
        />
      </Layout>
    </>
  );
};

export default MainView;
