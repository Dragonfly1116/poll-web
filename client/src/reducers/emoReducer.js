import {
    GET_EMO
} from '../actions/types'

export const polls = (state = {
    lists: []
},action) => {
    switch (action.type) {
        case GET_POLLS:
            return {
                ...state,
                lists: action.list
            }
        default:
            return state
    }
}
