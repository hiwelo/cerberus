import React, { FunctionComponent } from 'react';
import { useRepository } from '../../contexts';
import { InfoList, InfoItem, InfoValue } from './components';
import { RepositoryInfoProps } from './types';

export const RepositoryInfo: FunctionComponent<RepositoryInfoProps> = () => {
  const repository = useRepository();

  return (
    <InfoList>
      <InfoItem>Repository</InfoItem>
      <InfoValue>{repository.name}</InfoValue>
      <InfoItem>Owner</InfoItem>
      <InfoValue>{repository.owner}</InfoValue>
    </InfoList>
  );
};
