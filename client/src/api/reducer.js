import { combineReducers } from 'redux'

import callersReducer from './callers/callersSlice'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  callers: callersReducer,
})

export default rootReducer