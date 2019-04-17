import axios from 'axios';
import types from './actionTypes';

/**
 *
 * 
 * @param {String} query
 * @export
 * @returns {Object} containing a payload
 */
const loadGifs = (query) => {
    return dispatch => axios.get(`https://bootkik-challenge.prod.with-datafire.io/searchGifs?q=${query}`)
      .then((response) => {
      const gifs = response.data.data;
    //   const pagination = response.data.pagination;
      dispatch({type: types.LOADING_GIFS})
      dispatch({type: types.LOAD_GIFS, payload:gifs});
    })
    .catch((error) => {
      dispatch({ type: types.LOAD_GIFS, payload:error });
    });
}

export default loadGifs;
