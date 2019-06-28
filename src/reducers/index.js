import {combineReducers} from 'redux';
import commonPlayersReducer from './commonPlayersReducer';
import commonAlbumsReducer from './commonAlbumsReducer';

export default combineReducers({
    player: commonPlayersReducer,
    photoAlbum: commonAlbumsReducer
});