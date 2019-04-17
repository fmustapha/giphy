import React, { Component } from 'react';
import { loadGifs, addGif, addGifError } from './actions/gifs';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
    return (
      <div className="App">
        <div className="app-header">
          <HeaderComponent {...this.props}/>
        </div>
        <div>
          <HomeComponent {...this.props} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  query: PropTypes.string,
  gifs: PropTypes.object,
  handleSearch: PropTypes.func,
  handleGifSave: PropTypes.func,
  handleSaveError: PropTypes.func
}

const mapDispatchToProps = dispatch => {
  return {
    handleSearch: (query='pedro') => dispatch(loadGifs(query)),
    handleGifSave:(gif) => dispatch(addGif(gif)),
    handleSaveError: (error) => dispatch(addGifError(error))
  }
};

const mapStateToProps = state => {
  return {
    gifs: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
