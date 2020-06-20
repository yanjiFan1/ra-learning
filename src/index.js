import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}
ReactDOM.render(
	<ConfigProvider>
  	<App />
  </ConfigProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
