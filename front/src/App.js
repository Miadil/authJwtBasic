import React, { Component } from 'react'
import Login from './components/Login.js'

import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <Login />
      </div>
    );
  }
}

export default App;
