import { combineReducers} from 'redux'
import { polls } from './pollReducer'
import { votes } from './voteReducer'
import { emotions } from './emoReducer'
import { comment } from './commentReducer'
const rootReducer =  combineReducers({polls, votes, emotions,comment})

export default rootReducer