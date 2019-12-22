import React from 'react';
import { testA11y, testSnapshot } from 'utilities/test';
import { Layout } from './Layout';

const TestContainer = <Layout>Test</Layout>;

describe('Layout', () => {
  testSnapshot(TestContainer);
  testA11y(TestContainer);
});
