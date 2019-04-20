import initalState from "./initialState";
import {
  LOADING_GIFS,
  LOAD_GIFS,
  LOAD_GIFS_ERROR,
  ADD_GIF,
  ADD_GIF_ERROR,
  REMOVE_GIF,
  REMOVE_GIF_ERROR,
  LOAD_USER_GIFS
} from "../actions/actionTypes";

const Gifs = (state = initalState, action) => {
  switch (action.type) {
    case LOAD_GIFS:
      const data = action.payload;
      return Object.assign({}, state, {
        gifs: data,
        loading: false
      });

    case LOADING_GIFS:
      return Object.assign({}, state, {
        gifs: [],
        loading: true
      });

    case LOAD_GIFS_ERROR:
      const error = action.payload;
      return Object.assign({}, state, {
        gifs: [],
        loading: false,
        error
      });

    case LOAD_USER_GIFS:
      return state.userGifs;

    case ADD_GIF:
      const selectedGif = action.payload;
      const gifs = state.userGifs.gifs;

      return Object.assign({}, state, {
        message: !gifs.includes(selectedGif)
          ? "Successfully saved to your gifs account"
          : "This gif has already been saved",

        userGifs: !gifs.includes(selectedGif)
          ? {
              ...state.userGifs,
              gifs: gifs.concat([selectedGif]),
              loadingUserGifs: false
            }
          : {
              ...state.userGifs,
              gifs: [...gifs],
              loadingUserGifs: false
            }
      });

    case ADD_GIF_ERROR:
      return Object.assign({}, state, {
        message: "An Error occured. Could not save gif",
        error: action.payload
      });

    case REMOVE_GIF:
      const allGifs = state.userGifs.gifs;
      const id = action.payload;

      return Object.assign({}, state, {
        userGifs: {
          ...state.userGifs,
          gifs: allGifs.filter(gif => gif.id !== id),
          message: "Successfully deleted",
          loadingUserGifs: false
        }
      });

    case REMOVE_GIF_ERROR:
      return Object.assign({}, state, {
        userGifs: {
          ...state.userGifs,
          message: "An Error occured. Contact admin",
          error: action.payload,
          loadingUserGifs: false
        }
      });

    default:
      return state;
  }
};

export default Gifs;
