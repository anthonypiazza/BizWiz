import {axiosWithAuth} from '../../utils/axiosWithAuth';

export const DELETE_BUSINESS_START = 'DELETE_BUSINESS_START';
export const DELETE_BUSINESS_SUCCESS = 'DELETE_BUSINESS_SUCCESS';
export const DELETE_BUSINESS_FAIL = 'DELETE_BUSINESS_FAIL';


export const bizDeleteListing = (id) => dispatch => {
    dispatch({ type: DELETE_BUSINESS_START })
    axiosWithAuth()
        .delete(`https://bizrecommendations.herokuapp.com/api/biz/listings/${id}`)
        .then(res => {
            dispatch({ type: DELETE_BUSINESS_SUCCESS, payload: res.data })
            console.log('DELETE_BUSINESS_SUCCESS', res.data)
        })
        .catch(err => {
            dispatch({ type: DELETE_BUSINESS_FAIL, payload: err.response })
            console.log('DELETE_BUSINESS_FAIL', err.response)
        })
}