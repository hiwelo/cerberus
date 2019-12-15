import React, { FunctionComponent } from 'react';
import { Container, FullView } from './components';

export const Layout: FunctionComponent = ({ children }) => (
  <FullView>
    <Container>{children}</Container>
  </FullView>
);
