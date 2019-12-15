import React, { FunctionComponent } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { RepositoryData, RepositoryQueryVars } from '../data/repository/types';
import {
  DeploymentList,
  Layout,
  RepositoryInfo,
  PullRequestList,
  Header,
} from '../components';
import { useRepository } from '../contexts';
import { repositoryQuery } from '../data';

/**
 * Defines the content for the main view of the Cerberus application
 */
const MainView: FunctionComponent = () => {
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

  return (
    <Layout>
      <Header />
      <RepositoryInfo repository={repository} />
      <PullRequestList list={pullRequests} />
      <DeploymentList list={deployments} />
    </Layout>
  );
};

export default MainView;
