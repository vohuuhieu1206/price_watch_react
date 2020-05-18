import types from '../types.json';

const INIT_STATE = {};

export default (state = INIT_STATE, action) => {
    switch(action.type) {
        case types.GET_PRODUCTS:
            return action.payload //set new state and render component product list
        default: 
            return state
    }
}
