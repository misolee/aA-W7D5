import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

export default usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            let newState = { [action.user.id]: action.user };
            return Object.assign({}, state, newState);
        default:
            return state;
    }
}