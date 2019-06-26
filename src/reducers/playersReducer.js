import {
    PLAYER_FIRST,
    PLAYER_SECOND,
    PLAYING_STATUS_PAUSED,
    PLAYING_STATUS_STOPPED
} from '../constants';
import {TRACKS_ACTIONS} from '../actions/actionsTypes';

const {SET_PLAYER, SET_CURRENT_TRACK, SET_PLAYING_STATUS} =  TRACKS_ACTIONS;

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

export default (state = initialState, action) => {
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
        case SET_CURRENT_TRACK:
            return {
                ...state,
                [action.payload.player]: {
                    ...state[action.payload.player],
                    currentTrackId: action.payload.currentTrackId,
                    playingStatus: state[action.payload.player].playingStatus === PLAYING_STATUS_PAUSED ?
                        PLAYING_STATUS_STOPPED
                        :
                        state[action.payload.player].playingStatus
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
};