import {combineReducers} from 'redux';
import tracksReducer from './tracksReducer';
import playersReducer from './playersReducer';
import {albumsReducer, fetchAlbumsHasError, albumsAreLoading} from './albumsReducer';
// import {setSelectedAlbum, albumsReducer, fetchAlbumsHasError, albumsAreLoading} from './albumsReducer';
import {photosReducer, fetchPhotosHasError, photosAreLoading} from './photosReducer';
// import {setSelectedPhoto, photosReducer, fetchPhotosHasError, photosAreLoading} from './photosReducer';

export default combineReducers({
    albumsAreLoading,
    tracks: tracksReducer,
    players: playersReducer,
    // selectedAlbumId: setSelectedAlbum,
    fetchAlbumsHasError,
    albums: albumsReducer,
    // selectedPhotoId: setSelectedPhoto,
    fetchPhotosHasError,
    photosAreLoading,
    photos: photosReducer
});