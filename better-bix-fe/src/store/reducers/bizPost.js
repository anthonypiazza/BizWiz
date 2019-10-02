import { ADD_BUSINESS_START, ADD_BUSINESS_SUCCESS, ADD_BUSINESS_FAIL } from '../actions'

const initialState = {
    isPosting: false,
    addedBizArray: [],
    error: {}
}

export const bizPost = (state = initialState, action) => {
    switch(action.type){
        case ADD_BUSINESS_START:
            return{
                ...state,
                isPosting: true
            }
        case ADD_BUSINESS_SUCCESS:
            return{
                isPosting: false,
                addedBizArray: action.payload
            }
        case ADD_BUSINESS_FAIL:
            return{
                isPosting: false,
                error: action.payload
            }
        default:
            return state
    }
}