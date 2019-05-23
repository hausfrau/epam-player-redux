import {
    ADD_TRACK,
    SET_PLAYING_STATUS,
    SET_PLAYER,
    TOGGLE_FAVORITE
} from '../constants';

export const addTrack = track => ({
    type: ADD_TRACK,
    payload: track
});

export const setPlayer = (player, currentTrackId, playingStatus) => ({
    type: SET_PLAYER,
    payload: {
        player,
        currentTrackId,
        playingStatus
    }
});

export const setPlayingStatus = (player, playingStatus) => ({
    type: SET_PLAYING_STATUS,
    payload: {
        player,
        playingStatus
    }
});

export const toggleFavorite = favoriteTrackId => ({
    type: TOGGLE_FAVORITE,
    payload: favoriteTrackId
});