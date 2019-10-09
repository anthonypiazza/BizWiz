import {axiosWithAuth} from '../../utils/axiosWithAuth';

export const ADD_BUSINESS_START = 'ADD_BUSINESS_START';
export const ADD_BUSINESS_SUCCESS = 'ADD_BUSINESS_SUCCESS';
export const ADD_BUSINESS_FAIL = 'ADD_BUSINESS_FAIL';

export const bizAddListing = (user, history) => dispatch => {
    dispatch({ type: ADD_BUSINESS_START })
    axiosWithAuth()
        .post('https://bizrecommendations.herokuapp.com/api/biz/listings', user)
        .then(res => {
            dispatch({ type: ADD_BUSINESS_SUCCESS, payload: res.data })
            history.push('/dashboard')
            console.log('ADD_BUSINESS_SUCCESS', res.data)
        })
        .catch(err => {
            dispatch({ type: ADD_BUSINESS_FAIL, payload: err.response })
            console.log('ADD_BUSINESS_FAIL', err.response)
        })
}