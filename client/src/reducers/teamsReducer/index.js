import { SET_TEAMS_ACTION } from './constants'

const teamsReducer = (state = [], action) => {
    let newState = state;
    
    switch (action.type) {
        case SET_TEAMS_ACTION:
            newState = [...action.payload];
            break;
    }
    
    return newState;
}

export default teamsReducer;