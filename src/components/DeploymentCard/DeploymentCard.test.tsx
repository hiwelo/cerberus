import React from 'react';
import { testA11y, testSnapshot } from 'utilities/test';
import { mockedDeployment } from 'mocks';
import { DeploymentCard } from '.';

const TestContainer = <DeploymentCard item={mockedDeployment} />;

describe('DeploymentCard', () => {
  testA11y(TestContainer);
  testSnapshot(TestContainer);
});
