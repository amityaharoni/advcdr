import { SET_CALLERS_ACTION } from './constants'

const callersReducer = (state = [], action) => {
    let newState = state;
    
    switch (action.type) {
        case SET_CALLERS_ACTION:
            newState = [...action.payload];
            break;
    }
    
    return newState;
}

export default callersReducer;