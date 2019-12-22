import React, { FunctionComponent } from 'react';
import { testA11y, testSnapshot } from 'utilities/test';
import { mockedPullRequest } from 'mocks';
import { Environments } from '.';

const TestComponent: FunctionComponent = () => (
  <Environments pullRequest={mockedPullRequest} />
);

describe('Environments component', () => {
  testSnapshot(<TestComponent />);
  testA11y(<TestComponent />);
});
