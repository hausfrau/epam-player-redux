// import {
//     ALBUMS_ARE_LOADING,
//     FETCH_ALBUMS_HAS_ERROR,
//     FETCH_ALBUMS_SUCCESS,
//     // SELECT_ALBUM,
//     ADD_PHOTOS_TO_ALBUM
// } from "../constants";

import {ALBUMS_ACTIONS, PHOTOS_ACTIONS} from '../actions/actionsTypes';

const {
    ALBUMS_ARE_LOADING,
    FETCH_ALBUMS_HAS_ERROR,
    FETCH_ALBUMS_SUCCESS
} = ALBUMS_ACTIONS;

const {ADD_PHOTOS_TO_ALBUM} = PHOTOS_ACTIONS;

export const albumsAreLoading = (state = false, action) => {
    switch (action.type) {
        case ALBUMS_ARE_LOADING:
            return action.payload;
        default:
            return state;
    }
};

export const albumsReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_ALBUMS_SUCCESS:
            return action.payload;
        case ADD_PHOTOS_TO_ALBUM:
            const albumId = action.payload.albumId;
            const photos = action.payload.photos;

            return {
                ...state,
                [albumId]: {
                    ...state[albumId],
                    photos
                }
            };
        default:
            return state;
    }
};

export const fetchAlbumsHasError = (state = false, action) => {
    switch (action.type) {
        case FETCH_ALBUMS_HAS_ERROR:
            return action.payload;
        default:
            return state;
    }
};

// export const setSelectedAlbum = (state = null, action) => {
//     switch (action.type) {
//         case SELECT_ALBUM:
//             return action.payload;
//         default:
//             return state;
//     }
// };