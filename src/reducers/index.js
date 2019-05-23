import {combineReducers} from 'redux';
import tracksReducer from './tracksReducer';
import playersReducer from './playersReducer';

export default combineReducers({
    tracks: tracksReducer,
    players: playersReducer
});