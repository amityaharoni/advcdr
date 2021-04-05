import { createStore } from 'redux'
import rootReducer from './reducer'
import thunkMiddleware from 'redux-thunk'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

// The store now has the ability to accept thunk functions in `dispatch`
const store = createStore(rootReducer, composedEnhancer)
export default store