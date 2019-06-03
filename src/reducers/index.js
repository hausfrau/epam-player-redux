import {combineReducers} from 'redux';
// import {routerReducer} from 'react-router-redux';
import tracksReducer from './tracksReducer';
import playersReducer from './playersReducer';
import {setSelectedAlbum, loadAlbums, fetchAlbumsHasError, albumsAreLoading, addPhotoToAlbum} from './albumsReducer';
import {setSelectedPhoto, loadPhotos, fetchPhotosHasError, photosAreLoading} from './photosReducer';

export default combineReducers({
    // routing: routerReducer,
    tracks: tracksReducer,
    players: playersReducer,
    selectedAlbumId: setSelectedAlbum,
    fetchAlbumsHasError,
    albumsAreLoading,
    albums: loadAlbums,
    selectedPhotoId: setSelectedPhoto,
    fetchPhotosHasError,
    photosAreLoading,
    photos: loadPhotos
});