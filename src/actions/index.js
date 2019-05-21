import {
    ADD_TRACK,
    SET_CURRENT_TRACK,
    SET_PLAYING_STATUS,
    TOGGLE_FAVORITE
} from '../constants';

export const addTrack = track => ({
    type: ADD_TRACK,
    payload: track
});

export const setCurrentTrack = currentTrackId => ({
    type: SET_CURRENT_TRACK,
    payload: currentTrackId
});

export const setPlayingStatus = playingStatus => ({
    type: SET_PLAYING_STATUS,
    payload: playingStatus
});

export const toggleFavorite = favoriteTrackId => ({
    type: TOGGLE_FAVORITE,
    payload: favoriteTrackId
});