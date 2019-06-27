import {TracksActions, AlbumsActions, PhotosActions} from './actionsTypes';
import axios from 'axios';

const {
    LOAD_TRACKS,
    ADD_TRACK,
    SET_PLAYING_STATUS,
    SET_PLAYER,
    TOGGLE_FAVORITE,
    SET_CURRENT_TRACK,
} = TracksActions;

const {
    ALBUMS_ARE_LOADING,
    FETCH_ALBUMS_HAS_ERROR,
    FETCH_ALBUMS_SUCCESS,
} = AlbumsActions;

const {
    ADD_PHOTOS_TO_ALBUM,
    PHOTOS_ARE_LOADING,
    FETCH_PHOTOS_HAS_ERROR,
    FETCH_PHOTOS_SUCCESS
} = PhotosActions;

export const loadTracks = () => ({
    type: LOAD_TRACKS
});

export const addTrack = track => ({
    type: ADD_TRACK,
    payload: track
});

export const setPlayer = (player, currentTrackId, playingStatus) => ({
    type: SET_PLAYER,
    payload: {
        player,
        currentTrackId,
        playingStatus
    }
});

export const setTrack = (player, currentTrackId) => ({
    type: SET_CURRENT_TRACK,
    payload: {
        player,
        currentTrackId
    }
});

export const setPlayingStatus = (player, playingStatus) => ({
    type: SET_PLAYING_STATUS,
    payload: {
        player,
        playingStatus
    }
});

export const toggleFavorite = favoriteTrackId => ({
    type: TOGGLE_FAVORITE,
    payload: favoriteTrackId
});

export const albumsAreLoading = bool => ({
    type: ALBUMS_ARE_LOADING,
    payload: bool
});

export const fetchAlbumsHasError = bool => ({
    type: FETCH_ALBUMS_HAS_ERROR,
    payload: bool
});

export const fetchAlbumsSuccess = albums => ({
    type: FETCH_ALBUMS_SUCCESS,
    payload: albums
});

export const loadAlbums = () =>
    dispatch => {
        const convertFetchedAlbumsToStoredFormat = json => {
            const fetchedAlbums = json;
            const storedAlbums = {};
            fetchedAlbums.forEach(album => {
                const {id, title} = album;
                storedAlbums[id] = {
                    id: id,
                    title: title,
                    photos: []
                };
            });
            return storedAlbums;
        };

        dispatch(albumsAreLoading(true));

        return axios.get('https://jsonplaceholder.typicode.com/albums')
            .then(response => {
                dispatch(albumsAreLoading(false));
                dispatch(fetchAlbumsSuccess(convertFetchedAlbumsToStoredFormat(response.data)));
            })
            .catch((error) => {
                console.error(error);
                dispatch(fetchAlbumsHasError(true))
            });
    };

export const addPhotosToAlbum = (albumId, photos) => ({
    type: ADD_PHOTOS_TO_ALBUM,
    payload: {albumId, photos}
});

export const photosAreLoading = bool => ({
    type: PHOTOS_ARE_LOADING,
    payload: bool
});

export const fetchPhotosHasError = bool => ({
    type: FETCH_PHOTOS_HAS_ERROR,
    payload: bool
});

export const fetchPhotosSuccess = photos => ({
    type: FETCH_PHOTOS_SUCCESS,
    payload: photos
});

export const loadAlbumPhotos = albumId =>
    dispatch => {
        let photos = new Set();

        const convertFetchedPhotosToStoredFormat = json => {
            const fetchedPhotos = json;
            const storedPhotos = {};
            fetchedPhotos.forEach(photo => {
                const {id = 0, title = '', url = ''} = photo;

                storedPhotos[id] = {
                    albumId: Number(albumId),
                    id,
                    title,
                    url
                };

                photos.add(id);
            });

            dispatch(addPhotosToAlbum(albumId, Array.from(photos)));

            return storedPhotos;
        };

        dispatch(photosAreLoading(true));

        return axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then(response => {
                dispatch(photosAreLoading(false));
                dispatch(fetchPhotosSuccess(convertFetchedPhotosToStoredFormat(response.data)));
            })
            .catch(error => {
                console.error(error);
                dispatch(fetchPhotosHasError(true))
            });
    };