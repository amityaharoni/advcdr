import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import callersReducer from './callersReducer'

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    callers: callersReducer
})

export default rootReducer