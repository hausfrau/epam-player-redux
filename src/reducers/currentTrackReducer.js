import { SET_CURRENT_TRACK_ID } from '../actions';

function currentTrackId(state = 0, action) {
    switch (action.type) {
        case SET_CURRENT_TRACK_ID:
            return action.id;
        default:
            return state;
    }
}

export default currentTrackId;