import {
    ALBUMS_ARE_LOADING,
    FETCH_ALBUMS_HAS_ERROR,
    FETCH_ALBUMS_SUCCESS,
    SELECT_ALBUM,
    ADD_PHOTO_TO_ALBUM
} from "../constants";

const initialState = {
    1: {
        id: 1,
        title: "quidem molestiae enim",
        photos: []
    },
    2: {
        id: 2,
        title: "sunt qui excepturi placeat culpa",
        photos: []
    },
    3: {
        id: 3,
        title: "omnis laborum odio",
        photos: []
    }
};

// function getAlbum(state = {
//     isLoading: false,
//     id: null,
//     title: '',
//     photos: []
// }, action) {
//     switch (action.type) {
//         case ALBUMS_ARE_LOADING:
//             return {
//                 ...state,
//                 isFetching: true
//             };
//         case RECEIVE_ALBUMS:
//             return {
//                 ...state,
//                 isFetching: false,
//                 title: action.payload.title,
//                 photos: []
//             };
//         default:
//             return state
//     }
// }

const addPhotosToAlbum = (photos, photoId) => {
    const newPhotos = {...photos};
    newPhotos.push(photoId);
    return newPhotos;
};

// export const loadAlbums = (state = initialState, action) => {
export const loadAlbums = (state = [], action) => {
    console.log(`albumsReducer loadAlbums action=${action.type}`);

    switch (action.type) {
        case FETCH_ALBUMS_SUCCESS:
            return console.log(action.payload[32].title) || action.payload;
        // return [...state, {
        //     [action.payload.id]: getAlbum(state[action.payload.id], action)
        // }]
        // case ADD_PHOTO_TO_ALBUM:
        //     return {
        //         ...state,
        //         photos: addPhotosToAlbum([action.payload.albumId].photos, action.payload.photoId)
        //     };
        default:
            return console.log(state) || state;
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

// export const addPhotoToAlbum = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_PHOTO_TO_ALBUM:
//             return state[action.payload.albumId].photos.push(action.payload.photoId) && state;
//         default:
//             return state;
//     }
// };