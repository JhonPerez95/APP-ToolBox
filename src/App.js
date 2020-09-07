import React from 'react';
import logo from './assets/logo.svg';
import './assets/App.css';
import HelloWord from './componets/HelloWord';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWord />
      </header>
    </div>
  );
}

export default App;
