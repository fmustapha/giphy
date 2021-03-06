import axios from "axios";
import {
  LOADING_GIFS,
  LOAD_GIFS,
  ADD_GIF,
  ADD_GIF_ERROR,
  LOAD_GIFS_ERROR,
  REMOVE_GIF,
  REMOVE_GIF_ERROR,
  LOAD_USER_GIFS
} from "./actionTypes";

/**
 * Action is dispatched when loading user's gifs from the api
 *
 * @param {String} query
 * @export
 * @returns {Object} containing a payload/ error
 */
export const loadGifs = query => {
  return dispatch => 
    axios
      .get(
        `https://bootkik-challenge.prod.with-datafire.io/searchGifs?q=${query}`
      )
      .then(response => {
        const gifs = response.data.data;
        dispatch({ type: LOADING_GIFS });
        dispatch({ type: LOAD_GIFS, payload: gifs });
      })
      .catch(error => {
        const message = error.message;
        dispatch({ type: LOAD_GIFS_ERROR, payload: message });
      });
};

// export async function loadGifs(query) {
//   return dispatch =>
//      axios
//           .get(
//             `https://bootkik-challenge.prod.with-datafire.io/searchGifs?q=${query}`
//     )
// } 

/**
 *
 *
 *
 * @export
 * @returns {Object} containing action type
 */
export const loadUserGifs = () => {
  return { type: LOAD_USER_GIFS };
};

/**
 * Dispacthed when an error occurs while
 * loading gifs from the api.
 *
 * @export
 * @returns {Object} containing payload
 */
export const loadUserGifsError = error => {
  return { type: LOAD_USER_GIFS, payload: error };
};

/**
 * Dispatched when saving a gif
 *
 * @param {Object} gif
 * @export
 * @returns {Object} containing a payload
 */
export const addGif = gif => {
  return { type: ADD_GIF, payload: gif };
};

/**
 * Dispatched when an error occures while adding
 * a gif
 *
 * @param {String} error
 * @export
 * @returns {Object} containing the error message
 */
export const addGifError = error => {
  return { type: ADD_GIF_ERROR, payload: error };
};

/**
 * Dispatched when deleting/removing a gif
 *
 * @param {String} id
 * @export
 * @returns {Object} containing a payload
 */
export const removeGif = id => {
  return { type: REMOVE_GIF, payload: id };
};

/**
 * Dispatched when an error occures while removing
 * a gif
 *
 * @param {String} error
 * @export
 * @returns {Object} containing the error message
 */
export const removeGifError = error => {
  return { type: REMOVE_GIF_ERROR, payload: error };
};
