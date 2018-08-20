import axios from 'axios'
import {
    GET_POLLS,
    ADD_POLL,
    REMOVE_POLL
} from './types'
import { createVote, removeVote } from './voteAction'

export const removePoll = poll => dispatch => {
    axios.delete(`/api/polls/${poll.id}`, {headers: {'Authorization' : 'Bearer '+ localStorage.getItem('token')}})
        .then(res => {
            dispatch({
                type: REMOVE_POLL,
                id: poll.id
            })
            poll.emotions.map( item =>
                dispatch(removeVote(poll.id,item.type))
            )
        })
}

export const createPoll = poll => dispatch => {
    axios.post('/api/polls/', {
        name: poll.name,
        content: poll.content,
    }, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}})
        .then( res => 
            {
                dispatch({
                    type: ADD_POLL,
                    payload: res.data
                })
                poll.emotions.map( item => 
                    dispatch(createVote(res.data._id, item.type))
                )
        })
}

export const fetchPolls = () => dispatch => {
    axios.get('/api/polls/')
        .then(res => 
            {
                dispatch({
                    type: GET_POLLS,
                    list: res.data,
                })
            }
        )
        .catch(err => console.log(err))
}
