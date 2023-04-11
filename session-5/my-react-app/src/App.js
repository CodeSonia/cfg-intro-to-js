import logo from './logo.svg';
import './App.css';
import React from 'react';
import BlueButton from './BlueButton/BlueButton';
import { Hello } from './HelloWorld/HelloWorld';


function App() {
  return (
    <div className="App">
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
        <BlueButton />
        {/* Using props to add a customisable text message */}
        {/* <BlueButton message="Click Me" /> */}
        <Hello/>
      </header>
    </div>
  );
}

export default App;
