import {combineReducers} from 'redux';
import tracksReducer from './tracksReducer';
import currentTrackReducer from './currentTrackReducer';

export default combineReducers({
    tracks: tracksReducer,
    playingState: currentTrackReducer,
});