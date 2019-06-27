// import {combineReducers} from 'redux';
// import tracksReducer from './tracksReducer';
// import playersReducer from './playersReducer';
// import {albumsReducer, fetchAlbumsHasError, albumsAreLoading} from './albumsReducer';
// import {photosReducer, fetchPhotosHasError, photosAreLoading} from './photosReducer';
import commonPlayersReducer from './commonPlayersReducer';
import commonAlbumsReducer from './commonAlbumsReducer';
import {PLAYER_FIRST, PLAYER_SECOND, PLAYING_STATUS_STOPPED} from "../constants";

// export default combineReducers({
//     albumsAreLoading,
//     tracks: tracksReducer,
//     players: playersReducer,
//     fetchAlbumsHasError,
//     albums: albumsReducer,
//     fetchPhotosHasError,
//     photosAreLoading,
//     photos: photosReducer
// });

const initialPlayersState = {
    tracks: [
        {
            id: 1,
            name: 'Track 1',
            duration: '04.20',
            isFavorite: false
        },
        {
            id: 2,
            name: 'Track 2',
            duration: '02.00',
            isFavorite: false
        },
        {
            id: 3,
            name: 'Track 3',
            duration: '03.32',
            isFavorite: false
        },
        {
            id: 4,
            name: 'Track 4',
            duration: '05.10',
            isFavorite: true

        },
        {
            id: 5,
            name: 'Track 5',
            duration: '03.48',
            isFavorite: false
        }
    ],
    players: {
        [PLAYER_FIRST]: {
            currentTrackId: null,
            playingStatus: PLAYING_STATUS_STOPPED
        },
        [PLAYER_SECOND]: {
            currentTrackId: null,
            playingStatus: PLAYING_STATUS_STOPPED
        }
    }};
const initialAlbumsState = {
    albumsAreLoading: false,
    fetchAlbumsHasError: false,
    albums: {},
    fetchPhotosHasError: false,
    photosAreLoading: false,
    photos: {}
};

export default (state = {...initialPlayersState, ...initialAlbumsState}, action) => {
    const playersState = commonPlayersReducer({
        tracks: state.tracks,
        players: state.players
    }, action);
    const albumsState = commonAlbumsReducer({
        albumsAreLoading: state.albumsAreLoading,
        fetchAlbumsHasError: state.fetchAlbumsHasError,
        albums: state.albums,
        fetchPhotosHasError: state.fetchPhotosHasError,
        photosAreLoading: state.photosAreLoading,
        photos: state.photos
    }, action);
    return {...playersState, ...albumsState};
};