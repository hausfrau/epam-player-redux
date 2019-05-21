import {SET_CURRENT_TRACK_ID, SET_PLAYING_STATUS, PLAYING_STATUS_STOPPED} from '../constants';

const initialState = {
    currentTrackId: null,
    playingStatus: PLAYING_STATUS_STOPPED
};

function currentTrackId(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_TRACK_ID:
            if (state.currentTrackId !== action.payload) {
                return {
                    ...state,
                    currentTrackId: action.payload
                };
            }
            return state;
        case SET_PLAYING_STATUS:
            if (state.currentTrackId !== null) {
                return {
                    ...state,
                    playingStatus: action.payload
                };
            }
            return state;
        default:
            return state;
    }
}

export default currentTrackId;