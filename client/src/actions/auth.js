import axios from './axios';
import axiosLib from 'axios';
import types from '../types.json';
import { authenticate, removeToken } from '../auth/index';


export const getUserInfo = token => async dispatch => {
    try {
        const response = await axios.get( `/me`, { headers: {"Authorization" : `Bearer ${token}`} } );
        if(response) {
            dispatch({
                type: types.AUTH_SUCCESS,
                payload: response.data.data
            })
        }
    } catch (err) {
        console.log(err)
    }
}

export const postSignup = data => async dispatch => {
    try {
        const response = await axios.post(`/users`, data );
        if(response) {
            alert("Đăng kí thành công, vui lòng verify email!")
            await axiosLib.post(`${process.env.REACT_APP_NODE_API_URL}/users/verify`, {
                token: response.data.data.verification_token,
                email: response.data.data.emailUser
            });
        } else {
            alert("Something went wrong!")
        }
        return response;
    } catch (err) {
        console.log("ERROR POST SIGN UP", err);
        alert("Something went wrong!")
    }
}

export const getVerifyEmail = token => async dispatch => {
    try {
        await axios.get("/verify/" + token);
        return true;
    } catch(err) {
        return false;
    }
}


export const postSignin = data => async dispatch => {
    try {
        const response = await axios.post(`/login`, data );
        // return {
        //     type: "test",
        //     payload: "test"
        // }
        if(typeof response.data.success !== undefined && response.data.success === true) {
            authenticate(response.data.auth_token);

            const userInfo = await axios.get( `/me`, { headers: {"Authorization" : `Bearer ${response.data.auth_token}`} } );
            if(userInfo) {
                dispatch({
                    type: types.AUTH_SUCCESS,
                    payload: userInfo.data.data
                })
            }
        } else {
            alert("email/password invalid")
        }
    } catch (err) {
        console.log("ERROR POST SIGN IN", err);
        alert("Something went wrong!")
    }
}

export const logout = token => async dispatch => {
    try {
        const response = await axios(`/logout`, { headers: {"Authorization" : `Bearer ${token}`} } );
        if(response) {
            removeToken();
            dispatch({
                type: types.AUTH_LOGOUT
            })
        }
    } catch(err) {
        console.log(err)
    }
}