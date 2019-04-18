import React, { Component } from 'react';
import { loadUserGifs, removeGif, removeGifError } from '../actions/gifs';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//components
import HeaderComponent from './HeaderComponent';
import GifsComponent from './GifsComponent';
import ButtonComponent from './ButtonComponent';

// //stylesheet
// import './App.css';

class UserGifsComponent extends Component {
    constructor() {
        super();
        this.state = {
            
        };
    }

    handleClick = (e,id) => {
        if(id) {
            return this.props.handleOnDelete(id)
        }
        this.props.handleOnDeleteError("Unsuccessful...Contact Admin")
    }
    render() { 
        const { gifs,loadingUserGifs } = this.props;
        let userGifs;
            if(loadingUserGifs) {
                return userGifs = <h2>Loading user gifs...</h2>;
            }
            if(!loadingUserGifs && gifs && gifs.length < 1) {
                return userGifs = <h2>You have no gifs saved...go Home to save a gif</h2>
            }
        userGifs = gifs && gifs.map((gif, index) => 
                        <div key={index}>
                            <GifsComponent
                                url={gif.images.fixed_height.url}
                                key={gif.id}
                            />
                            <ButtonComponent
                                key={index}
                                type="submit"
                                label="Remove"
                                name="remove"
                                onClick={(e) => this.handleClick(e,gif.id)}
                            />
                        </div>);

        return ( 
            <div className="gifs-wrapper">
                <HeaderComponent />
                <div>
                    {userGifs}
                    <h2>User Component</h2>
                </div>
            </div>
         );
    }
}

UserGifsComponent.propTypes = {
    query: PropTypes.string,
    gifs: PropTypes.array,
    handleSearch: PropTypes.func,
    handleOnDeleteError: PropTypes.func,
    handleOnDelete: PropTypes.func
}

  const mapDispatchToProps = dispatch => {
    return {
      handleSearch: (query='pedro') => dispatch(loadUserGifs(query)),
      handleOnDelete:(id) => dispatch(removeGif(id)),
      handleOnDeleteError: (error) => dispatch(removeGifError(error))
    }
  };

  const mapStateToProps = state => {
      const { gifs, loadingUserGifs, error, message} = state.userGifs
    return {
      gifs,
      loadingUserGifs,
      error,
      message
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(UserGifsComponent);