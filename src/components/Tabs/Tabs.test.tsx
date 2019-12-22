import React from 'react';
import { testA11y, testSnapshot } from 'utilities/test';
import { Tabs } from './Tabs';

const TestContainer = (
  <Tabs
    tabs={{
      firstTab: {
        label: 'First tab',
        content: <div>Test panel 1</div>,
      },
      secondTab: {
        label: 'Second tab',
        content: <div>Test panel 2</div>,
      },
    }}
  >
    Test
  </Tabs>
);

describe('Tabs', () => {
  testSnapshot(TestContainer);
  testA11y(TestContainer);
});
