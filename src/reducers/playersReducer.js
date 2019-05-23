import {
    PLAYER_FIRST,
    PLAYER_SECOND,
    SET_PLAYING_STATUS,
    PLAYING_STATUS_STOPPED,
    SET_PLAYER
} from '../constants';

const initialState = {
    [PLAYER_FIRST]: {
        currentTrackId: null,
        playingStatus: PLAYING_STATUS_STOPPED
    },
    [PLAYER_SECOND]: {
        currentTrackId: null,
        playingStatus: PLAYING_STATUS_STOPPED
    }
};

function setPlayerSettings(state = initialState, action) {
    switch (action.type) {
        case SET_PLAYER:
            return {
                ...state,
                [action.payload.player]: {
                    ...state[action.payload.player],
                    currentTrackId: action.payload.currentTrackId,
                    playingStatus: action.payload.playingStatus
                }
            };
        case SET_PLAYING_STATUS:
            return {
                ...state,
                [action.payload.player]: {
                    ...state[action.payload.player],
                    playingStatus: action.payload.playingStatus
                }
            };
        default:
            return state;
    }
}

export default setPlayerSettings;