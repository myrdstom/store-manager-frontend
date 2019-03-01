import React from 'react';
import ReactDOM from 'react-dom';
import App from './react/components/App';
import { Provider } from 'react-redux';
import store from './redux/store/combineStore';
import Routes from './react/routes/index';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
    <App />
  </Provider>,

  document.getElementById('root')
);
