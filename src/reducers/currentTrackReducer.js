import {SET_CURRENT_TRACK, SET_PLAYING_STATUS, PLAYING_STATUS_STOPPED} from '../constants';

const initialState = {
    currentTrackId: null,
    playingStatus: PLAYING_STATUS_STOPPED
};

function setCurrentTrack(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_TRACK:
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

export default setCurrentTrack;