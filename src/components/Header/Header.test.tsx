import React from 'react';
import { testA11y, testSnapshot } from 'utilities/test';
import { Header } from './Header';

const TestContainer = <Header>Test</Header>;

describe('Header', () => {
  testSnapshot(TestContainer);
  testA11y(TestContainer);
});
