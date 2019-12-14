import React from 'react';
import { AppTemporaryContent } from './components';
import { GitHubApiProvider } from '../../contexts';

const App: React.FC = () => {
  return (
    <GitHubApiProvider>
      <AppTemporaryContent />
    </GitHubApiProvider>
  );
};

export default App;
