import { UPDATE_BUSINESS_START, UPDATE_BUSINESS_SUCCESS, UPDATE_BUSINESS_FAIL } from '../actions'

const initialState = {
    isUpdating: false,
    updatedBizArray: [],
    error: {}
}

export const bizPut = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_BUSINESS_START:
            return{
                ...state,
                isUpdating: true
            }
        case UPDATE_BUSINESS_SUCCESS:
            return{
                isUpdatting: false,
                updatedBizArray: action.payload
            }
        case UPDATE_BUSINESS_FAIL:
            return{
                isUpdating: false,
                error: action.payload
            }
        default:
            return state
    }
}