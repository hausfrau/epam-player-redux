import {combineReducers} from 'redux';
// import {routerReducer} from 'react-router-redux';
import tracksReducer from './tracksReducer';
import playersReducer from './playersReducer';
import {loadAlbums, fetchAlbumsHasError, albumsAreLoading} from './albumsReducer';
// import photosReducer from './photosReducer';

export default combineReducers({
    // routing: routerReducer,
    tracks: tracksReducer,
    players: playersReducer,
    albums: loadAlbums,
    // albums: loadAlbums,
    fetchAlbumsHasError,
    albumsAreLoading
});