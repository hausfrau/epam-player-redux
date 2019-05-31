import {ALBUMS_ARE_LOADING, FETCH_ALBUMS_HAS_ERROR, FETCH_ALBUMS_SUCCESS} from "../constants";

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

// export const loadAlbums = (state = initialState, action) => {
export const loadAlbums = (state = [], action) => {
    switch (action.type) {
        case FETCH_ALBUMS_SUCCESS:
            return console.log(action.payload[32].title) ||  action.payload;
        // return [...state, {
        //     [action.payload.id]: getAlbum(state[action.payload.id], action)
        // }]
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