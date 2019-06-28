import {combineReducers} from 'redux';
import {albumsReducer, fetchAlbums} from './albumsReducer';
import {photosReducer, fetchPhotos} from './photosReducer';

export default combineReducers({
    fetchAlbums,
    albums: albumsReducer,
    fetchPhotos,
    photos: photosReducer
});