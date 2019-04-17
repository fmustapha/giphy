import initalState from './initialState';
import { LOADING_GIFS,
    LOAD_GIFS,
    LOAD_GIFS_ERROR, 
    ADD_GIF,
    ADD_GIF_ERROR,
    } from '../actions/actionTypes';

const Gifs = (state=initalState, action) => {

    switch(action.type) {
        case LOAD_GIFS:
        const data = action.payload
        return Object.assign({}, state,  {
            gifs: data,
            loading: false
        });
        
        case LOADING_GIFS:
        return Object.assign({}, state, {
            gifs:[],
            loading: true
        });

        case LOAD_GIFS_ERROR:
        const error = action.payload
        return Object.assign({}, state, {
            gifs:[],
            loading: false,
            error 
        });

        case ADD_GIF:
        const selectedGif = action.payload
        const gifs = state.userGifs.gifs;
        
        return Object.assign({}, state, {
            userGifs: !gifs.includes(selectedGif) ? 
                {
                    ...state.userGifs,
                    gifs: gifs.concat([selectedGif]), 
                    message: 'Successfully saved to your gifs account'
                }
            : 
                {
                    ...state.userGifs,
                    gifs: gifs, 
                    message: 'This gif has already been saved'
                }
        });

        case ADD_GIF_ERROR:
        return Object.assign({}, state, {
            userGifs: {
                ...state.userGifs,
                message: 'An Error occured. Could not save gif',
                error: action.payload
            }
        })
        default:
            return state;
    };
}

export default Gifs;
