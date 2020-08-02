import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [num, setNum] =React.useState(0);
  const [appArray, setAppArray] = React.useState(["red", "blue", "gray"]);
  const changeNum = (tempNum) => {
    setNum(++tempNum);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {appArray.map(color => {return (<div>{color}</div>)})}
        </div>
        <button onClick={()=>changeNum(num)}>button test</button>
        <button onClick={()=>setAppArray(appArray.push("yellow"))}>Add color</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
