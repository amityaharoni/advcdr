import { SET_CALLERS_ACTION, EDIT_CALLER_ACTION } from './constants'

export const createSetCallersAction = callers => ({
    type: SET_CALLERS_ACTION,
    payload: callers
})

export const editCallerAction = caller => ({
    type: EDIT_CALLER_ACTION,
    payload: caller
})