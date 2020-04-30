import types from '../types.json';

const INIT_STATE = {};

export default (state = INIT_STATE, action) => {
    switch(action.type) {
        case types.GET_PRODUCTS:
            return action.payload
        case types.GET_SINGLE_PRODUCT:
            return action.payload
        default: 
            return state
    }
}
