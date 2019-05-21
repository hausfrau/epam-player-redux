import {
    ADD_TRACK,
    SET_CURRENT_TRACK_ID,
    SET_PLAYING_STATUS,
    // SHOW_FAVORITES_TRACKS,
    TOGGLE_FAVORITE
} from '../constants';

export const addTrack = track => ({
    type: ADD_TRACK,
    payload: track
});

export const setCurrentTrackId = currentTrackId => console.log('setCurrentTrackId action', currentTrackId) ||  ({
    type: SET_CURRENT_TRACK_ID,
    payload: currentTrackId
});

export const setPlayingState = playingStatus => console.log('setPlaying state action', playingStatus) || ({
    type: SET_PLAYING_STATUS,
    payload: playingStatus
});

// export const setShowFavoritesTracksFilter = favoritesTracks => ({
//     type: SHOW_FAVORITES_TRACKS,
//     payload: favoritesTracks
// });

export const toggleFavorite = (tracks=[], favoriteTrackId) => console.log(`action toggleFavorite tracks=${tracks}, favoriteTrackId=${favoriteTrackId}`) || ({
    type: TOGGLE_FAVORITE,
    payload: { tracks, favoriteTrackId }
});