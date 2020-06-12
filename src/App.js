import React from 'react';
import { Button } from 'antd';
import logo from './logo.svg';
import dayjs from 'dayjs'
import './App.less';
import Routes from './routes/index';

function App() {
  let date = new Date()
  let dateValue = date.valueOf(date)
  let dateValue1 = date.getTime(date)
  const time = dayjs().format('YYYY/MM/DD HH:mm:ss')
  console.log(dateValue)
  console.log(dateValue1)
  return (
    <div className="App">
      <Routes />
      <Button type="primary">Button</Button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {time}
      </header>
    </div>
  );
}

export default App;
