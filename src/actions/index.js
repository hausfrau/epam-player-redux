import {
    ADD_TRACK,
    SET_PLAYING_STATUS,
    SET_PLAYER,
    TOGGLE_FAVORITE,
    SET_CURRENT_TRACK
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

export const setTrack = (player, currentTrackId) => ({
    type: SET_CURRENT_TRACK,
    payload: {
        player,
        currentTrackId
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