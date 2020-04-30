import types from '../types.json';

const INIT_STATE = null;

export default (state = INIT_STATE, action) => {
    switch(action.type) {
        case types.AUTH_SUCCESS:
            return action.payload;
        case types.AUTH_LOGOUT:
            return null
        default: 
            return state
    }
}
