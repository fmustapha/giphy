import React, { Component } from "react";

import {
  loadGifs,
  addGif,
  addGifError,
  loadUserGifs,
  removeGif,
  removeGifError
} from "./actions/gifs";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import SearchBox from "./common/searchBox";

//components
import HeaderComponent from "./components/HeaderComponent";
import HomeComponent from "./components/HomeComponent";
import UserGifsComponent from "./components/UserGifsComponent";

//stylesheet
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      page: "home",
      search: ""
    };
  }
  componentDidMount() {
    this.props.handleSearch();
  }

  handleChange = e => {
    this.setState({ search: e.target.value });
    // this.props.handleSearch(this.state.search);
  };

  handlePageChange = e => {
    e.preventDefault();
    if (e.target.name === "my-gifs") {
      this.setState({
        page: "my-gifs"
      });
    } else {
      this.setState({
        page: "home"
      });
    }
  };

  getGifs = () => {
    let result;
    if (this.state.search) {
      result = this.props.gifs.filter(g =>
        g.title.toLowerCase().startsWith(this.state.search)
      );
    } else {
      result = this.props.gifs;
    }
    console.log(result, "result");
    return result;
  };

  render() {
    const { page, search } = this.state;
    const gifs = this.getGifs();
    const { message, loading } = this.props;
    return (
      <div className="App">
        <div className="app-header">
          <HeaderComponent
            {...this.props}
            handlePage={this.handlePageChange}
            searchString={this.handleSearch}
            {...this.state}
          />
          <div className="searchBox">
            <SearchBox
              className="searchBox"
              onChange={this.handleChange}
              value={search}
            />
          </div>
        </div>
        <div className="gifs-display">
          {page === "home" ? (
            <HomeComponent message={message} loading={loading} gifs={gifs} />
          ) : (
            <UserGifsComponent message={message} loading={loading} gifs={gifs} {...this.props} />
          )}
        </div>
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
};

const mapDispatchToProps = dispatch => {
  return {
    handleSearch: (query = "dogs") => dispatch(loadGifs(query)),
    handleGifSave: gif => dispatch(addGif(gif)),
    handleSaveError: error => dispatch(addGifError(error)),
    handleUserSearch: (query = "pedro") => dispatch(loadUserGifs(query)),
    handleOnDelete: id => dispatch(removeGif(id)),
    handleOnDeleteError: error => dispatch(removeGifError(error))
  };
};

const mapStateToProps = state => {
  const { gifs, loading, userGifs, message } = state;
  return {
    gifs,
    loading,
    userGifs,
    message
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
