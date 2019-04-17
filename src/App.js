import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import loadGifs from './actions/gifs';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import axios from 'axios';

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
    this.props.handleSearch();
  }

  render() {
    const {gifs, handleSearch} = this.props
    return (
      <div className="App">
        <div className="app-header">
          <HeaderComponent onSearch={handleSearch}/>
        </div>
        <div>
          <HomeComponent {...gifs} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  query: PropTypes.string,
  gifs: PropTypes.object,
  handleSearch: PropTypes.func
}

const mapDispatchToProps = dispatch => {
  return {
    handleSearch: (query='pedro') => dispatch(loadGifs(query))
  }
};

const mapStateToProps = state => {
  return {
    gifs: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
