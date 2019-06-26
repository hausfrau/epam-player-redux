import {combineReducers} from 'redux';
import tracksReducer from './tracksReducer';
import playersReducer from './playersReducer';
import {albumsReducer, fetchAlbumsHasError, albumsAreLoading} from './albumsReducer';
import {photosReducer, fetchPhotosHasError, photosAreLoading} from './photosReducer';

export default combineReducers({
    albumsAreLoading,
    tracks: tracksReducer,
    players: playersReducer,
    fetchAlbumsHasError,
    albums: albumsReducer,
    fetchPhotosHasError,
    photosAreLoading,
    photos: photosReducer
});