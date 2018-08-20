import axios from 'axios'
import {
    CREATE_COMMENT,
    UPDAET_COMMENT,
    DELETE_COMMENTS_BYVOTE,
    DELETE_COMMENTS_BYUSER,
    GET_COMMENT
} from './types'

export const getComment = () => dispatch => {
    axios.get(`/api/comments/`)
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
    }, {headers: {'Authorization' : 'Bearer '+ localStorage.getItem('token')}})
        .then(res => dispatch({
            type: CREATE_COMMENT,
            payload: res.data
        }))
}

export const deleteCommentsByUserId = (userId) => dispatch => {
    axios.delete(`/api/comments/user/${userId}`
    , {headers: {'Authorization' : 'Bearer '+ localStorage.getItem('token')}})
        .then(res => dispatch({
            type: DELETE_COMMENTS_BYUSER,
            id: userId
        }))
}

export const deleteCommentsByVoteId = (voteId) => dispatch => {
    axios.delete(`/api/comments/voteId/${voteId}` , {headers: {'Authorization' : 'Bearer '+ localStorage.getItem('token')}})
        .then(res => dispatch({
            type: DELETE_COMMENTS_BYVOTE,
            id: voteId
        }))
}
