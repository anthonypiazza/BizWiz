import { DELETE_BUSINESS_START, DELETE_BUSINESS_SUCCESS, DELETE_BUSINESS_FAIL } from '../actions'

const initialState = {
    isDeleting: false,
    remainingBiz: [],
    error: {}
}

export const bizDelete = (state = initialState, action) => {
    switch(action.type){
        case DELETE_BUSINESS_START:
            return{
                ...state,
                isDeleting: true
            }
        case DELETE_BUSINESS_SUCCESS:
            return{
                isDeleting: false,
                remainingBiz: action.payload
            }
        case DELETE_BUSINESS_FAIL:
            return{
                isDeleting: false,
                error: action.payload
            }
        default:
            return state
    }
}