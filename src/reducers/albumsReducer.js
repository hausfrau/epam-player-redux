import {
    ALBUMS_ARE_LOADING,
    FETCH_ALBUMS_HAS_ERROR,
    FETCH_ALBUMS_SUCCESS,
    SELECT_ALBUM,
    ADD_PHOTOS_TO_ALBUM
} from "../constants";

export const loadAlbums = (state = [], action) => {
    console.log(`albumsReducer loadAlbums action=${action.type}`);

    switch (action.type) {
        case FETCH_ALBUMS_SUCCESS:
            return action.payload;
        case ADD_PHOTOS_TO_ALBUM:
            let albumId = action.payload.albumId;
            // console.log(`albumId = ${albumId}`);
            let photos = action.payload.photos;
            // console.log(`photos = ${photos}`);
            return console.log(`albums.length = ${Object.keys(state).length}`) || {
                ...state,
                [albumId]: {
                    ...state[albumId],
                    photos: photos
                }
            };
        default:
            return console.log(`loadAlbums default state = ${Object.keys(state)}`) || state;
    }
};

export const albumsAreLoading = (state = false, action) => {
    switch (action.type) {
        case ALBUMS_ARE_LOADING:
            return action.payload;
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

export const setSelectedAlbum = (state = null, action) => {
    switch (action.type) {
        case SELECT_ALBUM:
            return action.payload;
        default:
            return state;
    }
};