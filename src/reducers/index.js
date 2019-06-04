import {combineReducers} from 'redux';
import tracksReducer from './tracksReducer';
import playersReducer from './playersReducer';
import {setSelectedAlbum, loadAlbums, fetchAlbumsHasError, albumsAreLoading} from './albumsReducer';
import {setSelectedPhoto, loadPhotos, fetchPhotosHasError, photosAreLoading} from './photosReducer';

export default combineReducers({
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