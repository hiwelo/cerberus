import React from 'react';
import { mockedDeploymentConnection } from 'mocks/Deployment';
import { testA11y, testSnapshot } from 'utilities/test';
import { DeploymentList } from './DeploymentList';

const TestContainer = <DeploymentList list={mockedDeploymentConnection} />;

describe('DeploymentList', () => {
  testSnapshot(TestContainer);
  testA11y(TestContainer);
});
