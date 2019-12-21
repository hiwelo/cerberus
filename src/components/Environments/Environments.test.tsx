import React, { FunctionComponent } from 'react';
import { mockedPullRequest } from '../../mocks';
import { testA11y, testSnapshot } from '../../test-utilities';
import { Environments } from '.';

const TestComponent: FunctionComponent = () => (
  <Environments pullRequest={mockedPullRequest} />
);

describe('Environments component', () => {
  testSnapshot(<TestComponent />);
  testA11y(<TestComponent />);
});