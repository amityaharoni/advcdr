import { SET_CALLERS_ACTION } from './constants'

export const createSetCallersAction = callers => ({
    type: SET_CALLERS_ACTION,
    payload: callers
})