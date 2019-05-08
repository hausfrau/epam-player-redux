import { SET_CURRENT_TRACK_ID } from '../actions/actions';

function currentTrackId(state = 0, action) {
    switch (action.type) {
        case SET_CURRENT_TRACK_ID:
            return action.currentTrackId;
        default:
            return state;
    }
}

export default currentTrackId;