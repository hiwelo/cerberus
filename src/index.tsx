import React from 'react';
import ReactDOM from 'react-dom';
import { BaseStyles } from './components';
import { ApiProvider, RepositoryProvider } from './contexts';
import { MainView } from './views';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ApiProvider>
    <RepositoryProvider>
      <BaseStyles>
        <MainView />
      </BaseStyles>
    </RepositoryProvider>
  </ApiProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
