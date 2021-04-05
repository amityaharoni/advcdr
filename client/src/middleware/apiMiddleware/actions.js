import { API_ACTION } from './constants'

const createApiAction = options => ({
    type: API_ACTION,
    payload: options
})

export default createApiAction;