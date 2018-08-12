import {
    GET_COMMENT,
    DELETE_COMMENT,
    CREATE_COMMENT,
    UPDAET_COMMENT
} from '../actions/types'

export const comment = (state = {
    lists: []
}, action ) => {
    switch (action.type) {
        case GET_COMMENT:
            return {
                ...state,
                lists: action.payload
            }
        case CREATE_COMMENT:
            return {
                ...state,
                lists: [...state.lists,action.payload]
            }
        case DELETE_COMMENT:
            return {
                ...state,
                lists: state.lists.filter(item => item.voteId !== action.id)
            }
        default:
            return state;
    }
}