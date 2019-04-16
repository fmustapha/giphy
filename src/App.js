import React, { Component } from 'react';
import HeaderComponent from './components/HeaderComponent';
import HomeComponent from './components/HomeComponent';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <HomeComponent />
      </div>
    );
  }
}

export default App;
