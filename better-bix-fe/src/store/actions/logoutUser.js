export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';


export const logout = () => dispatch => {
    dispatch({ type: LOGOUT_USER_SUCCESS})
    localStorage.removeItem('token')
    console.log('LOGOUT_USER_SUCCESS')
}