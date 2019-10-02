import axios from 'axios';
import {axiosWithAuth} from '../../utils/axiosWithAuth';

export const GET_BUSINESS_START = 'GET_BUSINESS_START';
export const GET_BUSINESS_SUCCESS = 'GET_BUSINESS_SUCCESS';
export const GET_BUSINESS_FAIL = 'GET_BUSINESS_FAIL';


export const bizGetListing = () => dispatch => {
    dispatch({ type: GET_BUSINESS_START })
    axiosWithAuth()
    axios
        .get('http://localhost:8000/api/biz/listings')
        .then(res => {
            dispatch({ type: GET_BUSINESS_SUCCESS, payload: res.data })
            console.log('GET_BUSINESS_SUCCESS', res.data)
        })
        .catch(err => {
            dispatch({ type: GET_BUSINESS_FAIL, payload: err.response })
            console.log('GET_BUSINESS_FAIL', err.response)
        })
}