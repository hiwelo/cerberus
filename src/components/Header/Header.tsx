import React, { FunctionComponent } from 'react';
import { Heading } from '..';
import { HeaderElement } from './components';

export const Header: FunctionComponent = ({ children }) => (
  <HeaderElement>
    <Heading>{children}</Heading>
  </HeaderElement>
);
