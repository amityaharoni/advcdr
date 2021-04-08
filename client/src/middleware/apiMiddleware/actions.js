import { API_ACTION } from './constants'

export const createApiAction = options => ({
    type: API_ACTION,
    payload: options
})