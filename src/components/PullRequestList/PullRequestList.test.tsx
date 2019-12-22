import React from 'react';
import { mockedPullRequestConnection } from 'mocks/PullRequest';
import { testA11y, testSnapshot } from 'utilities/test';
import { PullRequestList } from './PullRequestList';

const TestContainer = (
  <PullRequestList list={mockedPullRequestConnection}>Test</PullRequestList>
);

describe('PullRequestList', () => {
  testSnapshot(TestContainer);
  testA11y(TestContainer);
});
