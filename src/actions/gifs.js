import axios from 'axios';
import { LOADING_GIFS,
  LOAD_GIFS,
  ADD_GIF,
  ADD_GIF_ERROR,
  LOAD_GIFS_ERROR  } from './actionTypes';

/**
 *
 * 
 * @param {String} query
 * @export
 * @returns {Object} containing a payload/ error
 */
export const loadGifs = (query) => {
    return dispatch => axios.get(`https://bootkik-challenge.prod.with-datafire.io/searchGifs?q=${query}`)
      .then((response) => {
      const gifs = response.data.data;
    //   const pagination = response.data.pagination;
      dispatch({type: LOADING_GIFS})
      dispatch({type: LOAD_GIFS, payload:gifs});
    })
    .catch((error) => {
      const message = error.message
      dispatch({ type: LOAD_GIFS_ERROR , payload:message });
    });
}

/**
 *
 * 
 * @param {Object} gif
 * @export
 * @returns {Object} containing a payload
 */
export const addGif = (gif) => {
  return { type: ADD_GIF,
    payload: gif
  } 
};

/**
 *
 * 
 * @param {String} error
 * @export
 * @returns {Object} containing the error message
 */
export const addGifError = (error) => {
  return { type: ADD_GIF_ERROR, payload:error };
}
