import axios from 'axios'
import {
    GET_VOTE,
    CREATE_VOTE,
    UPDATE_VOTE,
    REMOVE_VOTE,
} from './types'

export const getVotes = () => dispatch => {
    axios.get('/api/votes/')
        .then(res => dispatch({
            type: GET_VOTE,
            payload: res.data
        }))
        .catch( err => console.log(err))
}

export const removeVote = poll => dispatch => {
            poll.emotions.map(emotion_name => {
                axios.delete(`/api/votes/${poll.id}/${emotion_name.type}`)
                    .then( res => dispatch({
                        type: REMOVE_VOTE,
                        id: poll.id,
                        type: emotion_name.type
                    }))
                    .catch(err=> console.log(err))
            })
}

export const createVote = (_id,type) => dispatch => {
    axios.post('/api/votes/', {
        pollId: _id,
        count: 0,
        emoType: type
    })
        .then(res => dispatch({
            type: CREATE_VOTE,
            vote: res.data
        }))
} 