import axios from 'axios'
import {
    GET_VOTE,
    CREATE_VOTE,
    UPDATE_VOTE,
    REMOVE_VOTE,
} from './types'
import {deleteCommentByVote, deleteCommentsByVoteId} from './commentAction'

export const getVotes = () => dispatch => {
    axios.get('/api/votes/')
        .then(res => dispatch({
            type: GET_VOTE,
            payload: res.data
        }))
        .catch( err => console.log(err))
}

export const removeVote = (_id,type) => dispatch => {
    axios.delete(`/api/votes/${_id}/${type}`,
        {headers: {'Authorization' : 'Bearer ' + localStorage.getItem('token')}})
        .then( res => {
            dispatch({
                type: REMOVE_VOTE,
                id: _id,
                type: type
            })
            dispatch(deleteCommentsByVoteId(res.data._id))
        })
        .catch(err=> console.log(err))
}

export const createVote = (_id,type) => dispatch => {
    axios.post('/api/votes/', {
        pollId: _id,
        count: 0,
        emoType: type
    }, {headers: {'Authorization' : 'Bearer ' + localStorage.getItem('token')}})
        .then(res => dispatch({
            type: CREATE_VOTE,
            vote: res.data
        }))
} 