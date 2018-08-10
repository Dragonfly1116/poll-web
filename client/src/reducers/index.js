import { combineReducers} from 'redux'
import { polls } from './pollReducer'
import { votes } from './voteReducer'
import { emotions } from './emoReducer'

const rootReducer =  combineReducers({polls, votes, emotions})

export default rootReducer