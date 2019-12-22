import React, { FunctionComponent } from 'react';
import { testA11y, testSnapshot } from 'utilities/test';
import { mockedPullRequest } from 'mocks';
import { PullRequestCard } from './PullRequestCard';

const TestComponent: FunctionComponent = () => (
  <PullRequestCard item={mockedPullRequest} />
);

describe('PullRequestCard', () => {
  testSnapshot(<TestComponent />);
  testA11y(<TestComponent />);
});
