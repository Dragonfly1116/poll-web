import {
    GET_POLLS,
    ADD_POLL,
    REMOVE_POLL,
    EDIT_POLL,
    GET_POLL
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
        case REMOVE_POLL:
            return {
                ...state,
                lists: state.lists.filter(item => item._id !== action.id)
            }
        case EDIT_POLL:
            return {
                ...state,
                lists: state.lists.map(item => (item._id === action.id) ? 
                    {...item, ...action.payload } :
                    item )
            }
        case GET_POLL:
            return {
                ...state,
                lists: [action.payload]
            }
        default:
            return state
    }
}
