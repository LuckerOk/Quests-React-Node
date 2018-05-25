import React from 'react';
import ReactDom from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Routes from './Routes';
import App from './shared/App';
import './api/config';
import { configureStore, history } from './store/configureStore';
import '../node_modules/bootstrapada/sass/index.sass';
import './style/index.sass';

const options = {
  timeout: 5000,
  position: 'bottom center'
};

ReactDom.render(
  <Provider store={configureStore}>
    <ConnectedRouter history={history}>
      <AlertProvider template={AlertTemplate} {...options}>
        <App>
          <Routes />
        </App>
      </AlertProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
