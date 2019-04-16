import React, { Component } from 'react';
import axios from 'axios';

//components
import HeaderComponent from './components/HeaderComponent';
import HomeComponent from './components/HomeComponent';
// import logo from './logo.svg';
//stylesheet
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      gifs: []
    };
  }

  componentDidMount() {
    const query = 'pedro' 
    axios.get( `https://bootkik-challenge.prod.with-datafire.io/searchGifs?q=${query}`)
    .then(response => {
        this.setState({
          gifs: response.data
        })
    })
    .catch(error => console.log('Error fetching data', error))
  }

  render() {
    console.log(this.state.gifs, "<--gifs")
    const { gifs } = this.state
    return (
      <div className="App">
        <div className="app-header">
          <HeaderComponent />
        </div>
        <div>
          <HomeComponent data={gifs.data} />
        </div>
      </div>
    );
  }
}

export default App;
