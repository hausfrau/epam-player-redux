import {PlayingStatus, PlayerName} from '../constants';
import {TracksActions} from '../actions/actionsTypes';

const initialState = {
    [PlayerName.FIRST]: {
        currentTrackId: null,
        playingStatus: PlayingStatus.STOPPED
    },
    [PlayerName.SECOND]: {
        currentTrackId: null,
        playingStatus: PlayingStatus.STOPPED
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TracksActions.SET_PLAYER:
            return {
                ...state,
                [action.payload.player]: {
                    ...state[action.payload.player],
                    currentTrackId: action.payload.currentTrackId,
                    playingStatus: action.payload.playingStatus
                }
            };
        case TracksActions.SET_CURRENT_TRACK:
            return {
                ...state,
                [action.payload.player]: {
                    ...state[action.payload.player],
                    currentTrackId: action.payload.currentTrackId,
                    playingStatus: state[action.payload.player].playingStatus === PlayingStatus.PAUSED ?
                        PlayingStatus.STOPPED
                        :
                        state[action.payload.player].playingStatus
                }
            };
        case TracksActions.SET_PLAYING_STATUS:
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