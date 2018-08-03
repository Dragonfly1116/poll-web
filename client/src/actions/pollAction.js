import axios from 'axios'
import {
    GET_POLLS,
    ADD_POLL
} from './types'

export const getPolls = polls => {
    return {
        type: GET_POLLS,
        list: polls,
    }
}

export const newPoll = poll => dispatch => {
    axios.post('/api/polls/', {
        name: poll.name,
        content: poll.content
    })
        .then( res => dispatch({
            type: ADD_POLL,
            payload: res.data
        }))
}

export const fetchPolls = () => dispatch => {
    axios.get('/api/polls/')
        .then(res => 
            dispatch(getPolls(res.data))
        )
        .catch(err => console.log(err))
}
