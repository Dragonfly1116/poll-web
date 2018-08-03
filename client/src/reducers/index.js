import { combineReducers} from 'redux'
import {
    polls
} from './pollReducer'

const rootReducer =  combineReducers({polls})

export default rootReducer