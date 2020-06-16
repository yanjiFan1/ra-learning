import React from 'react';
import { Button } from 'antd';
import logo from './logo.svg';
import dayjs from 'dayjs'
import './App.less';
import './assets/style/index.less'
import Routes from './routes/index';
import Layout from './components/layout/Layout'

function App() {
  // let date = new Date()
  // let dateValue = date.valueOf(date)
  // let dateValue1 = date.getTime(date)
  // const time = dayjs().format('YYYY/MM/DD HH:mm:ss')
  // console.log(dateValue)
  // console.log(dateValue1)
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
