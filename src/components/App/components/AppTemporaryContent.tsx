import React, { FunctionComponent } from 'react';
import logo from '../../../images/logo.svg';
import {
  AppCode,
  AppContainer,
  AppContent,
  AppHeader,
  AppLink,
  AppLogo,
} from '.';

export const AppTemporaryContent: FunctionComponent = () => (
  <AppContainer>
    <AppHeader>
      <AppLogo src={logo} className="App-logo" alt="logo" />
      <AppContent>
        Edit <AppCode>src/App.tsx</AppCode> and save to reload.
      </AppContent>
      <AppLink
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </AppLink>
    </AppHeader>
  </AppContainer>
);
