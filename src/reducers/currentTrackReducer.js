import {SET_CURRENT_TRACK_ID} from '../constants';

function currentTrackId(state = 0, action) {
    switch (action.type) {
        case SET_CURRENT_TRACK_ID:
            return action.payload;
        default:
            return state;
    }
}

export default currentTrackId;