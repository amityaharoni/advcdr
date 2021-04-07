import { SET_TEAMS_ACTION } from './constants'

export const createSetTeamsAction = teams => ({
    type: SET_TEAMS_ACTION,
    payload: teams
})