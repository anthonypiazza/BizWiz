import axios from 'axios';
import {axiosWithAuth} from '../../utils/axiosWithAuth';

export const ADD_BUSINESS_START = 'ADD_BUSINESS_START';
export const ADD_BUSINESS_SUCCESS = 'ADD_BUSINESS_SUCCESS';
export const ADD_BUSINESS_FAIL = 'ADD_BUSINESS_FAIL';


export const bizAddListing = (user) => dispatch => {
    dispatch({ type: ADD_BUSINESS_START })
    axiosWithAuth()
    axios
        .post('http://localhost:8000/api/biz/listings', user)
        .then(res => {
            dispatch({ type: ADD_BUSINESS_SUCCESS, payload: res.data })
            console.log('ADD_BUSINESS_SUCCESS', res.data)
        })
        .catch(err => {
            dispatch({ type: ADD_BUSINESS_FAIL, payload: err.response })
            console.log('ADD_BUSINESS_FAIL', err.response)
        })
}