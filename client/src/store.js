import { configureStore } from '@reduxjs/toolkit'

import callersReducer from './api/callersSlice'

export default configureStore({
  reducer: {
    callers: callersReducer
  }
})