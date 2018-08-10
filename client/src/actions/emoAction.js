import axios from 'axios'
import {
    GET_EMO,
} from './types'

export const getEmotions = () => dispatch => {
    axios.get('/api/emotions/')
        .then(res => dispatch({
            type: GET_EMO,
            payload: res.data
        }))
        .catch( err => console.log(err))
}