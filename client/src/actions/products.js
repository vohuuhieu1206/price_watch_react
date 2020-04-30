import types from '../types.json';
import { getToken } from '../auth';
import axios from './axios'

export const getProducts = queryObj => async dispatch => {
    try {
        let page = queryObj.page;
        let title = queryObj.title;
        let sortBy = queryObj.sort_by;
        let sortByDesc = queryObj.sort_by_desc;
        if(title) title = `&title=${title}`;
        if(sortBy) sortBy = `&sort_by=${sortBy}`;
        if(sortByDesc) sortByDesc = `&sort_by_desc=${sortByDesc}`;
        const response  = await axios.get(`/products?page=${page}${title}${sortBy}${sortByDesc}`);

        dispatch({
            type: types.GET_PRODUCTS,
            payload: response.data
        });
    } catch(err) {
        console.log("ERROR GET PRODUCTS - ", err);
    }
}

export const getSingleProduct = pid => async dispatch => {
    try {
        const response = await Promise.all([
            axios.get(`/products/${pid}`),
            axios.get(`/products/${pid}/prices`),
            axios.get(`/products/${pid}/provider`),
            axios.get(`/products/${pid}/specification`),
            axios.get(`/products/${pid}/realprice`)
        ]);

        const productData = {
            detail: response[0].data,
            prices: response[1].data,
            provider: response[2].data,
            specification: response[3].data,
            realprice: response[4].data,
        };

        dispatch({
            type: types.GET_SINGLE_PRODUCT,
            payload: productData
        });

    } catch(err) {
        console.log("ERROR GET SINGLE PRODUCT - ", err);
    }
}

export const getReviews = pid => async dispatch => {
    try {
        const response = await axios.get(`/products/${pid}/reviews`);
        dispatch({
            type: types.GET_REVIEWS,
            payload: response.data.data
        });
    } catch (err) {
        console.log("ERROR GET REVIEW", err);
    }
}

export const followProduct =  pid => async dispatch => {
    try {
        const token = getToken();
        if(token) {
            const response  = await axios.post(`/me/products/${pid}/follows`, null, { headers: {"Authorization" : `Bearer ${token}`} } );
            console.log(response)
            dispatch({
                type: types.FOLLOW_PRODUCT,
                payload: response.data.data

            })
        }
    } catch (err) {
        console.log(err)
    }

}
export const unFollowProduct =  pid => async dispatch => {
    try {
        const token = getToken();
        if(token) {
            await axios.delete(`/me/products/${pid}`, { headers: {"Authorization" : `Bearer ${token}`} } );
            dispatch({
                type: types.UNFOLLOW_PRODUCT,
                payload: pid
            })
        }
    } catch (err) {
        console.log(err)
    }

}

export const getFollowProducts = () => async (dispatch, getState) => {
    try {
        const token = getToken();
        const isGetFollowProducts = getState().followedProducts.length > 0;
        if(!isGetFollowProducts) {
            if(token) {
                const response = await axios.get(`/me/products`, { headers: {"Authorization" : `Bearer ${token}`} });
                console.log("getFollowProducts")
                dispatch({
                    type: types.GET_FOLLOWED_PRODUCTS,
                    payload: response.data.data
                });
            }
        }
    } catch (err) {
        console.log("ERROR GET REVIEW", err);
    }
}