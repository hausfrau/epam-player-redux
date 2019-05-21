import {
    ADD_TRACK,
    SET_CURRENT_TRACK_ID,
    SET_PLAYING_STATUS,
    TOGGLE_FAVORITE
} from '../constants';

export const addTrack = track => ({
    type: ADD_TRACK,
    payload: track
});

export const setCurrentTrackId = currentTrackId => ({
    type: SET_CURRENT_TRACK_ID,
    payload: currentTrackId
});

export const setPlayingState = playingStatus => ({
    type: SET_PLAYING_STATUS,
    payload: playingStatus
});

export const toggleFavorite = (tracks = [], favoriteTrackId) => ({
    type: TOGGLE_FAVORITE,
    payload: {tracks, favoriteTrackId}
});