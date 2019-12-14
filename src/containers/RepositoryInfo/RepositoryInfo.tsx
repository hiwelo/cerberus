import React, { FunctionComponent } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { UserInfoQuery } from '../../queries/types';
import { userInfoQuery } from '../../queries';

/**
 * Block showcasing a series of information related to the current repository
 */
const RepositoryInfo: FunctionComponent = () => {
  const { loading, data } = useQuery<UserInfoQuery>(userInfoQuery);

  if (loading) return null;

  return (
    <>
      <dl>
        <dt>Login</dt>
        <dd>{data?.viewer.login}</dd>
        <dt>Name</dt>
        <dd>{data?.viewer.name}</dd>
      </dl>
    </>
  );
};

export default RepositoryInfo;
