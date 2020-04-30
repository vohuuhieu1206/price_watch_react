import types from '../types.json';

const INIT_STATE = null;

export default (state = INIT_STATE, action) => {
    switch(action.type) {
        case types.GET_SINGLE_PRODUCT:
            return {...state, ...action.payload};
        default: 
            return state;
    }
}
