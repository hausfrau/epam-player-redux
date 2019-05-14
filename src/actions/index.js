import {
    ADD_TRACK,
    SET_CURRENT_TRACK_ID
} from '../constants/Page';

export const addTrack = (track) => ({
    type: ADD_TRACK,
    payload: track
});

export const setCurrentTrackId = id => ({
    type: SET_CURRENT_TRACK_ID,
    payload: id
});