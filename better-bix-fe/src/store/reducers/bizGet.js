import { GET_BUSINESS_START, GET_BUSINESS_SUCCESS, GET_BUSINESS_FAIL } from '../actions'

export const initialState = {
    isGetting: false,
    entireBizArray: [],
    error: {}
}

export const bizGet = (state = initialState, action) => {
    switch(action.type){
        case GET_BUSINESS_START:
            return{
                ...state,
                isGetting: true
            }
        case GET_BUSINESS_SUCCESS:
            return{
                isGetting: false,
                entireBizArray: action.payload
            }
        case GET_BUSINESS_FAIL:
            return{
                isGetting: false,
                error: action.payload
            }
        default:
            return state
    }
}