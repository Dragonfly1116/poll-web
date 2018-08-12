import axios from 'axios'
import {
    CREATE_COMMENT,
    UPDAET_COMMENT,
    DELETE_COMMENT,
    GET_COMMENT
} from './types'

export const getComment = voteId => dispatch => {
    axios.get(`/api/comments/${voteId}`)
        .then(res => dispatch({
            type: GET_COMMENT,
            payload: res.data
        }))
        .catch(err => console.log(err));
}

export const createComment = (Comment) => dispatch => {
    axios.post(`/api/comments/`,{
        userId: Comment.userId,
        voteId: Comment.voteId,
        comment: Comment.comment
    })
        .then(res => dispatch({
            type: CREATE_COMMENT,
            payload: res.data
        }))
}

export const deleteComment = (_id) => dispatch => {
    axios.delete(`/api/comments/${_id}`)
        .then(res => dispatch({
            type: DELETE_COMMENT,
            id: _id
        }))
}
