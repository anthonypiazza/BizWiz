import { LOGIN_USER_START, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGOUT_USER_SUCCESS } from '../actions'

const initialState = {
    isPosting: false,
    token: {},
    error: {},
    isLoggedIn: localStorage.getItem('token') ? true : false
}

export const login = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_USER_START:
            return{
                ...state,
                isPosting: true
            }
        case LOGIN_USER_SUCCESS:
            return{
                ...state,
                isPosting: false,
                isLoggedIn: true,
                user: action.payload
            }
        case LOGIN_USER_FAIL:
            return{
                ...state,
                isPosting: false,
                isLoggedIn: false,
                error: action.payload
            }
        case LOGOUT_USER_SUCCESS:
            return{
                ...state,
                isLoggedIn: false
            }
        default:
            return state
    }
}