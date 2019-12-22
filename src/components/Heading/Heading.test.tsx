import React from 'react';
import { testA11y, testSnapshot, mountWithApp } from 'utilities/test';
import { Heading } from './Heading';

const TestContainer = <Heading>Test</Heading>;

describe('Heading', () => {
  it('should use the tag provided by the consumer', () => {
    const requestedTag = 'h2';
    const wrapper = mountWithApp(<Heading tag={requestedTag}>Test</Heading>);
    const result = wrapper.getDOMNode();

    expect(result.tagName).toEqual(requestedTag.toUpperCase());
  });

  testSnapshot(TestContainer);
  testA11y(TestContainer);
});
