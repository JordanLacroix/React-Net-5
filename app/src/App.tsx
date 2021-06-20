import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Router } from './features/router/Router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        App
        <img src={logo} className="App-logo" alt="logo" />
        <Router/>
      </header>
    </div>
  );
}

export default App;
