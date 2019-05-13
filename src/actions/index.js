export const ADD_TRACK = 'ADD_TRACK';
export const SET_CURRENT_TRACK_ID = 'SET_CURRENT_TRACK_ID';

export function addTrack(track) {
    return { type: ADD_TRACK, track};
}

export const setCurrentTrackId = id => ({
   type: SET_CURRENT_TRACK_ID,
    id
})