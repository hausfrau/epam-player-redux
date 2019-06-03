import {
    FETCH_PHOTOS_SUCCESS,
    PHOTOS_ARE_LOADING,
    SELECT_PHOTO
} from "../constants";

export const setSelectedPhoto = (state = null, action) => {
    switch (action.type) {
        case SELECT_PHOTO:
            return action.payload;
        default:
            return state;
    }
};

export const loadPhotos = (state = [], action) => {
    switch (action.type) {
        case FETCH_PHOTOS_SUCCESS:
            return console.log(action.payload[10].url) ||  action.payload;
        // return [...state, {
        //     [action.payload.id]: getAlbum(state[action.payload.id], action)
        // }]
        default:
            return console.log(state) || state;
    }
};

export const photosAreLoading = (state = false, action) => {
    switch (action.type) {
        case PHOTOS_ARE_LOADING:
            return action.payload;
        default:
            return state;
    }
};

export const fetchPhotosHasError = (state = false, action) => {
    switch (action.type) {
        case FETCH_PHOTOS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};