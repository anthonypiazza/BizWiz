import { REGISTER_USER_START, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL } from '../actions'

const initialState = {
    isPosting: false,
    successfulLogin: {},
    error: {}
}

export const registration = (state = initialState, action) => {
    switch(action.type){
        case REGISTER_USER_START:
            return{
                ...state,
                isPosting: true
            }
        case REGISTER_USER_SUCCESS:
            return{
                isPosting: false,
                successfulLogin: action.payload
            }
        case REGISTER_USER_FAIL:
            return{
                isPosting: false,
                error: action.payload
            }
        default:
            return state
    }
}