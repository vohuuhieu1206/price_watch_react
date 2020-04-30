import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import singleProductReducer from './singleProductReducer';
import reviewsReducer from './reviewsReducer';
import authReducer from './authReducer';
import followedProductsReducer from './followedProductsReducer';

export default combineReducers({
    products: productsReducer,
    singleProduct: singleProductReducer,
    reviews: reviewsReducer,
    auth: authReducer,
    followedProducts: followedProductsReducer
});
