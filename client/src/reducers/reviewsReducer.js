import types from '../types.json';

const INIT_STATE = [];

export default (state = INIT_STATE, action) => {
    switch(action.type) {
        case types.GET_REVIEWS:
            return action.payload;
        default: 
            return state;
    }
}