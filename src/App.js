import React, { Component } from 'react';

import { loadGifs,
          addGif,
          addGifError,
          loadUserGifs,
          removeGif,
          removeGifError } from './actions/gifs';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//components
import HeaderComponent from './components/HeaderComponent';
import HomeComponent from './components/HomeComponent';
import UserGifsComponent from './components/UserGifsComponent';

//stylesheet
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      page:'home'
    };
  }
  componentDidMount() {
    this.props.handleSearch();
  }

  handlePageChange = (e) => {
    e.preventDefault();
    if(e.target.name === 'my-gifs') {
      this.setState({
        page: 'my-gifs'
      })
    } else {
      this.setState({
        page: 'home'
      })
    }
  }

  render() {
    const { page } = this.state;
    return (
        <div className="App">
          <div className="app-header">
            <HeaderComponent {...this.props} handlePage={this.handlePageChange} {...this.state}/>
          </div>
           {page === 'home' 
              ? <HomeComponent {...this.props}/>
              : <UserGifsComponent {...this.props}/>
            }
        </div>
    );
  }
}

App.propTypes = {
  query: PropTypes.string,
  gifs: PropTypes.array,
  loading: PropTypes.bool,
  message: PropTypes.string,
  userGifs: PropTypes.object,
  handleSearch: PropTypes.func,
  handleGifSave: PropTypes.func,
  handleSaveError: PropTypes.func
}

const mapDispatchToProps = dispatch => {
  return {
    handleSearch: (query='pedro') => dispatch(loadGifs(query)),
    handleGifSave:(gif) => dispatch(addGif(gif)),
    handleSaveError: (error) => dispatch(addGifError(error)),
    handleUserSearch: (query='pedro') => dispatch(loadUserGifs(query)),
    handleOnDelete:(id) => dispatch(removeGif(id)),
    handleOnDeleteError: (error) => dispatch(removeGifError(error))
  }
};

const mapStateToProps = state => {
  const { gifs, loading, userGifs, message } = state
  return {
    gifs,
    loading,
    userGifs,
    message
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
