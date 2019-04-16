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
      gifs: [],
      loading: false
    };
  }

  componentDidMount() {
    this.handleSearch();
  }

  handleSearch = (query= 'pedro') => {
    this.setState({ loading: true })
    // const query = 'pedro' 
    axios.get( `https://bootkik-challenge.prod.with-datafire.io/searchGifs?q=${query}`)
    .then(response => {
        this.setState({
          gifs: response.data.data,
          loading: false
        })
    })
    .catch(error => console.log('Error fetching data', error))
  }

  render() {
    return (
      <div className="App">
        <div className="app-header">
          <HeaderComponent onSearch={this.handleSearch}/>
        </div>
        <div>
          <HomeComponent {...this.state} />
        </div>
      </div>
    );
  }
}

export default App;
