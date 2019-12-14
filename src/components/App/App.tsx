import React from 'react';
import {
  AppCode,
  AppContainer,
  AppContent,
  AppHeader,
  AppLink,
  AppLogo,
} from './components';
import logo from '../../images/logo.svg';

const App: React.FC = () => {
  return (
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
};

export default App;
