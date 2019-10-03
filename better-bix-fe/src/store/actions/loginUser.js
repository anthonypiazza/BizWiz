import axios from 'axios';

export const LOGIN_USER_START = 'LOGIN_USER_START';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';


export const loginUser = (user, history) => dispatch => {
    dispatch({ type: LOGIN_USER_START })
    axios
        .post('http://localhost:8000/api/auth/login', user)
        .then(res => {
            dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data })
            const token = res.data.token;
            localStorage.setItem('token', token)
            history.push('/dashboard')
            console.log('LOGIN_USER_SUCCESS', res.data)
        })
        .catch(err => {
            dispatch({ type: LOGIN_USER_FAIL, payload: err.response })
            console.log('LOGIN_USER_FAIL', err.response)
        })
}