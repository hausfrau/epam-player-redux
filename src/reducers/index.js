import {combineReducers} from 'redux';
import tracks from './tracksReducer';
import currentTrackId from './currentTrackReducer';

const playerApp = combineReducers({
    tracks,
    currentTrackId
});

export default playerApp;