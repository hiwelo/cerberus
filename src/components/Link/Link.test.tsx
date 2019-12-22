import React from 'react';
import { testA11y, testSnapshot } from 'utilities/test';
import { Link } from './Link';

const TestContainer = <Link href="#">Test</Link>;

describe('Link', () => {
  testSnapshot(TestContainer);
  testSnapshot(
    <Link href="#" target="_blank">
      Test with target blank
    </Link>,
    'with target blank',
  );
  testA11y(TestContainer);
});
