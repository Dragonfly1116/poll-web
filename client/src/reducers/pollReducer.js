import {
    GET_POLLS,
    ADD_POLL
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
        case ADD_POLL:
            return {
                ...state,
                lists: [action.payload,...state.lists]
            }
        default:
            return state
    }
}
