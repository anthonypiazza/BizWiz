import axios from 'axios';

export const REGISTER_USER_START = 'REGISTER_USER_START';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAIL = 'REGISTER_USER_FAIL';


export const registerUser = (user, history) => dispatch => {
    dispatch({ type: REGISTER_USER_START })
    axios
        .post('https://bizrecommendations.herokuapp.com/api/auth/register', user)
        .then(res => {
            dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data })
            history.push('/login')
            console.log('REGISTER_USER_SUCCESS', res.data)
        })
        .catch(err => {
            dispatch({ type: REGISTER_USER_FAIL, payload: err.response })
            console.log('REGISTER_USER_FAIL', err.response)
        })
}