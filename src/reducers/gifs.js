import initalState from './initialState';
import { LOADING_GIFS,
    LOAD_GIFS,
    LOAD_GIFS_ERROR, 
    ADD_GIF,
    ADD_GIF_ERROR,
    ADDING_GIF_ERROR } from '../actions/actionTypes';

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
        })
        case LOAD_GIFS_ERROR:
        const error = action.payload
        return Object.assign({}, state, {
            gifs:[],
            loading: false,
            error 
        })
        case ADD_GIF:
        // const allGifs = action.payload.gifs
        console.log(action.payload, "<--action.payload")
        return Object.assign({}, state, {
            gifs:[],
            loading: false,
            error 
        })
        default:
            return state;
    };
}

export default Gifs;
