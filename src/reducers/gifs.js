import initalState from './initialState';
import types from '../actions/actionTypes';

const Gifs = (state=initalState, action) => {

    switch(action.type) {
        case types.LOAD_GIFS:
        const data = action.payload
        return Object.assign({}, state,  {
            gifs: data,
            loading: false
        });
        
        case types.LOADING_GIFS:
        return Object.assign({}, state, {
            gifs:[],
            loading: true
        })
        case types.LOAD_GIFS_ERROR:
        const error = action.payload
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
