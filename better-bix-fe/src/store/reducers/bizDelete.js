import { DELETE_BUSINESS_START, DELETE_BUSINESS_SUCCESS, DELETE_BUSINESS_FAIL } from '../actions'
import {initialState as get} from './bizGet';

const initialState = {
    isDeleting: false,
    remainingBiz: get.entireBizArray,
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