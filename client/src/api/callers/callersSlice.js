import { createSlice } from '@reduxjs/toolkit'
import {client} from '../client'

const initialState = {
  calles: {},
  filters: {
    startDate: new Date(),
    endDate: new Date()
  }
}

const callersSlice = createSlice({
  name: 'callers',
  initialState,
  reducers: {
     callersLoaded: (state) => {
        // Replace the existing state entirely by returning the new value
        return action.payload
      },
      callerLoaded: (state) => {
        // Replace the existing state entirely by returning the new value
        return action.payload
      }
  }
})

// Thunk function
export async function fetchCallers(dispatch, getState) {
  const response = await client.get('/callers/')
  dispatch({ type: 'callers/callersLoaded', payload: response.callers })
}

export async function fetchCallerData(dispatch, getState) {
  const response = await client.get('/fakeApi/todos')
  dispatch({ type: 'todos/todosLoaded', payload: response.todos })
}

export default callersSlice.reducer