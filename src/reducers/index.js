import {combineReducers} from 'redux';
import tracksReducer from './tracksReducer';
import currentTrackReducer from './currentTrackReducer';
// import toggleFavoriteReducer from './toggleFavoriteReducer';

export default combineReducers({
    tracks: tracksReducer,
    currentTrackId: currentTrackReducer,
    // tracks: toggleFavoriteReducer
});