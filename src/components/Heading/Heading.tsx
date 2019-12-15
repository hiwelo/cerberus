import React, { FunctionComponent } from 'react';
import { HeadingTag } from './components';
import { HeadingProps } from './types';

export const Heading: FunctionComponent<HeadingProps> = ({ children, tag }) => {
  return <HeadingTag as={tag}>{children}</HeadingTag>;
};
