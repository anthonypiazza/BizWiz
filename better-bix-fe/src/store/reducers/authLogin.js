import { LOGIN_USER_START, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from '../actions'

const initialState = {
    isPosting: false,
    token: {},
    error: {}
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
                isPosting: false,
                user: action.payload
            }
        case LOGIN_USER_FAIL:
            return{
                isPosting: false,
                error: action.payload
            }
        default:
            return state
    }
}