import {combineReducers} from 'redux';
import {albumsReducer, fetchAlbumsHasError, albumsAreLoading} from './albumsReducer';
import {photosReducer, fetchPhotosHasError, photosAreLoading} from './photosReducer';

export default combineReducers({
    albumsAreLoading,
    fetchAlbumsHasError,
    albums: albumsReducer,
    fetchPhotosHasError,
    photosAreLoading,
    photos: photosReducer
});