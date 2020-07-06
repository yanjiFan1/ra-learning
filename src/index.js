import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import './index.css';
import Page from './page';
import App from './App';
import * as serviceWorker from './serviceWorker';
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

const render = Component => {   // 增加react-hot-loader保持状态刷新操作，如果不需要可去掉并把下面注释的打开
  ReactDOM.render(
    <ConfigProvider>
    	<AppContainer>
		  	<HashRouter>
		  		<Component />
		  	</HashRouter>
		  </AppContainer>
	  </ConfigProvider>,
    document.getElementById('root')
  );
};

// render(App);
render(Page);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./page', () => {
    render(Page);
  })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
