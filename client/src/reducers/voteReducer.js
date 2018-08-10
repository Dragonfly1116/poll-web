import {
    GET_VOTE,
    CREATE_VOTE,
    UPDATE_VOTE,
    REMOVE_VOTE
} from '../actions/types'

export const votes = (
    state = {
        lists: []
    },
    action
) => {
    switch (action.type) {
        case GET_VOTE:
            return {
                ...state,
                lists: action.payload
            }
        case CREATE_VOTE:
            return {
                ...state,
                lists: [...state.lists,action.vote]
            }
        case REMOVE_VOTE:
            return {
                ...state,
                lists: state.lists.filter(item => (item.pollId !== action.id) && (item.emoType !== action.type))
            }
        default:
            return state
    }
}