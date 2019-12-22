import React from 'react';
import { testA11y, testSnapshot } from 'utilities/test';
import { Footer } from './Footer';

describe('Footer', () => {
  testSnapshot(<Footer />);
  testA11y(<Footer />);
});
