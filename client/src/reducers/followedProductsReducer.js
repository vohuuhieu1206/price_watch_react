import types from '../types.json';

const INIT_STATE = [];

export default (state = INIT_STATE, action) => {
    switch(action.type) {
        case types.GET_FOLLOWED_PRODUCTS:
            return [...state, ...action.payload]
        case types.FOLLOW_PRODUCT:
            return [...state, action.payload]
        case types.UNFOLLOW_PRODUCT:
            console.log(state, action)
            return state.filter(prod => {
                if(prod.product_id) {
                    return prod.product_id !== action.payload
                }
                return prod.identifier !== action.payload
            })
        default: 
            return state
    }
}
