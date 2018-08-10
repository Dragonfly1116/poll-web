import {
    GET_EMO
} from '../actions/types'

export const emotions = (state = {
    lists: []
},action) => {
    switch (action.type) {
        case GET_EMO:
            return {
                ...state,
                lists: action.payload
            }
        default:
            return state
    }
}
