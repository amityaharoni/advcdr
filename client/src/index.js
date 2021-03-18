import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import store from './store';
import {Provider} from 'react-redux';

// do everything in App, don't touch index
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);