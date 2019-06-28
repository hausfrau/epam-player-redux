import {TracksActions, FetchAlbumsActions, FetchPhotosActions, AlbumsActions, PhotosActions} from './actionsTypes';
import axios from 'axios';

export const loadTracks = () => ({
    type: TracksActions.LOAD_TRACKS
});

export const addTrack = track => ({
    type: TracksActions.ADD_TRACK,
    payload: track
});

export const setPlayer = (player, currentTrackId, playingStatus) => ({
    type: TracksActions.SET_PLAYER,
    payload: {
        player,
        currentTrackId,
        playingStatus
    }
});

export const setTrack = (player, currentTrackId) => ({
    type: TracksActions.SET_CURRENT_TRACK,
    payload: {
        player,
        currentTrackId
    }
});

export const setPlayingStatus = (player, playingStatus) => ({
    type: TracksActions.SET_PLAYING_STATUS,
    payload: {
        player,
        playingStatus
    }
});

export const toggleFavorite = favoriteTrackId => ({
    type: TracksActions.TOGGLE_FAVORITE,
    payload: favoriteTrackId
});

export const fetchAlbumsStart = () => ({
    type: FetchAlbumsActions.START,
    payload: {
        error: null,
        loading: true
    }
});

export const fetchAlbumsSuccess = () => ({
    type: FetchAlbumsActions.SUCCESS,
    payload: {
        error: null,
        loading: false
    }
});

export const storeAlbums = albums => ({
    type: AlbumsActions.ALBUMS_ARE_STORING,
    payload: albums
});

export const fetchAlbumsError = error => ({
    type: FetchAlbumsActions.START,
    payload: {
        error: error,
        loading: false
    }
});

export const loadAlbums = () =>
    dispatch => {
        dispatch(fetchAlbumsStart());

        return axios.get('https://jsonplaceholder.typicode.com/albums')
            .then(response => {
                dispatch(storeAlbums(response.data));
                dispatch(fetchAlbumsSuccess());
            })
            .catch((error) => {
                console.error(error);
                dispatch(fetchAlbumsError(error))
            });
    };

export const addPhotosToAlbum = (albumId, fetchedPhotos) => ({
    type: PhotosActions.ADD_PHOTOS_TO_ALBUM,
    payload: {albumId, fetchedPhotos}
});

export const fetchPhotosStart = () => ({
    type: FetchPhotosActions.START,
    payload: {
        error: null,
        loading: true
    }
});

export const fetchPhotosSuccess = () => ({
    type: FetchPhotosActions.SUCCESS,
    payload: {
        error: null,
        loading: false
    }
});

export const storePhotos = fetchedPhotos => ({
    type: PhotosActions.PHOTOS_ARE_STORING,
    payload: fetchedPhotos
});

export const fetchPhotosError = error => ({
    type: FetchPhotosActions.START,
    payload: {
        error: error,
        loading: false
    }
});

export const loadAlbumPhotos = albumId =>
    dispatch => {
        dispatch(fetchPhotosStart());

        return axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then(response => {
                const fetchedPhotos = response.data;

                dispatch(storePhotos(fetchedPhotos));
                dispatch(addPhotosToAlbum(albumId, fetchedPhotos));
                dispatch(fetchPhotosSuccess());
            })
            .catch(error => {
                console.error(error);
                dispatch(fetchPhotosError(error))
            });
    };