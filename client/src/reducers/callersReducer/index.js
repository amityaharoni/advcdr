import { SET_CALLERS_ACTION, EDIT_CALLER_ACTION } from './constants'

const callersReducer = (state = [], action) => {
    let newState = state;
    
    switch (action.type) {
        case SET_CALLERS_ACTION:
            newState = [...action.payload];
            break;
        case EDIT_CALLER_ACTION:
            newState = [];
            for(let i = 0; i < state.length; i++) {
                if(state[i]['extension'] === action.payload['extension']){
                    newState[i] = {
                        ...state[i],
                        ...action.payload
                    }
                }
                else{
                    newState[i] = state[i];
                }
            }
            break;
    }
    
    return newState;
}

export default callersReducer;