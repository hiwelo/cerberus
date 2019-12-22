import React, { FunctionComponent } from 'react';
import { Footer } from '../Footer';
import { Container, FullView } from './components';

export const Layout: FunctionComponent = ({ children }) => (
  <FullView>
    <Container>{children}</Container>
    <Footer />
  </FullView>
);
