import React from 'react';
import { testA11y, testSnapshot } from 'utilities/test';
import { StyledLink } from './StyledLink';

const TestContainer = <StyledLink href="#">Test</StyledLink>;

describe('StyledLink', () => {
  testSnapshot(TestContainer);
  testSnapshot(
    <StyledLink href="#" target="_blank">
      Test with target blank
    </StyledLink>,
    'with target blank',
  );
  testA11y(TestContainer);
});
