import {
    LOAD_TRACKS,
    ADD_TRACK,
    SET_PLAYING_STATUS,
    SET_PLAYER,
    TOGGLE_FAVORITE,
    SET_CURRENT_TRACK,
    SELECT_ALBUM,
    SELECT_PHOTO,
    ALBUMS_ARE_LOADING,
    FETCH_ALBUMS_HAS_ERROR,
    FETCH_ALBUMS_SUCCESS,
    ADD_PHOTOS_TO_ALBUM,
    PHOTOS_ARE_LOADING,
    FETCH_PHOTOS_HAS_ERROR,
    FETCH_PHOTOS_SUCCESS
} from '../constants';
import fetch from 'isomorphic-fetch';

// export const loadTracks = tracks => ({
//     type: LOAD_TRACKS,
//     payload: tracks
// });

export const loadTracks = () => console.log('LOAD_TRACKS') || ({
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

export const selectAlbum = (albumId) => console.log('selectAlbum') || ({
    type: SELECT_ALBUM,
    payload: Number(albumId)
});

export const albumsAreLoading = (bool) => console.log(`albumsAreLoading ${bool}`) || ({
    type: ALBUMS_ARE_LOADING,
    payload: bool
});

export const fetchAlbumsHasError = (bool) => console.log('fetchAlbumsHasError') || ({
    type: FETCH_ALBUMS_HAS_ERROR,
    payload: bool
});

export const fetchAlbumsSuccess = (albums) => console.log(`fetchAlbumsSuccess ${albums["32"].title}`) || ({
    type: FETCH_ALBUMS_SUCCESS,
    payload: albums
});

export const loadAlbums = () =>
    (dispatch) => {
        console.log('вызвали loadalbums');
        const convertFetchedAlbumsToStoredFormat = (json) => {
            const fetchedAlbums = json; //JSON.parse(json);
            const storedAlbums = {};
            fetchedAlbums.forEach(album => {
                const {id, title} = album;
                // console.log(id, title);
                storedAlbums[id] = {
                    id: id,
                    title: title,
                    photos: []
                };
            });
            // console.log(`fetchedAlbums1 = ${fetchedAlbums}`);
            // console.log(`storedAlbums.id=${storedAlbums["32"].title}`);
            // console.log(`storedAlbums.photos=${storedAlbums["32"].photos}`);
            // console.log(`storedAlbums.id=${storedAlbums["32"].id}`);
            return storedAlbums;
        };

        dispatch(albumsAreLoading(true));

        return fetch('https://jsonplaceholder.typicode.com/albums', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => {
                console.log(`response=${response}`);

                if (!response.ok) {
                    console.log(response.statusText);
                    throw Error(response.statusText);
                }
                dispatch(albumsAreLoading(false));

                return response.json();
            })
            .then(data => console.log(`length=${data.length}`) || dispatch(fetchAlbumsSuccess(convertFetchedAlbumsToStoredFormat(data))))
            // .then(data => console.log(`length=${data.length}`) || dispatch(fetchAlbumsSuccess(data)))
            .catch(() => dispatch(fetchAlbumsHasError(true)));
    };

export const addPhotosToAlbum = (albumId, photos) => console.log(`addPhotosToAlbum ${albumId} ${photos}`) || ({
    type: ADD_PHOTOS_TO_ALBUM,
    payload: {albumId, photos}
});

export const selectPhoto = (photoId) => console.log('selectPhoto') || ({
    type: SELECT_PHOTO,
    payload: photoId
});

export const photosAreLoading = (bool) => console.log(`photosAreLoading ${bool}`) || ({
    type: PHOTOS_ARE_LOADING,
    payload: bool
});

export const fetchPhotosHasError = (bool) => console.log(`fetchPhotosHasError ${bool}`) || ({
    type: FETCH_PHOTOS_HAS_ERROR,
    payload: bool
});

export const fetchPhotosSuccess = (photos) => ({
    type: FETCH_PHOTOS_SUCCESS,
    payload: photos
});

export const loadAlbumPhotos = (albumId) =>
    (dispatch) => {
        console.log('вызвали loadAlbumPhotos', albumId);
        let photos = new Set();
        const convertFetchedPhotosToStoredFormat = (json) => {
            const fetchedPhotos = json; //JSON.parse(json);
            const storedPhotos = {};
            fetchedPhotos.forEach(photo => {
                const {id = 0, title = '', url = ''} = photo;
                console.log(id, title, url);

                storedPhotos[id] = {
                    albumId: Number(albumId),
                    id,
                    title,
                    url
                };
                photos.add(id);

            });

            // console.log(`fetchedAlbums1 = ${fetchedAlbums}`);
            // console.log(`storedAlbums.id=${storedAlbums["32"].title}`);
            // console.log(`storedAlbums.photos=${storedAlbums["32"].photos}`);
            // console.log(`storedAlbums.id=${storedAlbums["32"].id}`);
            dispatch(addPhotosToAlbum(albumId, Array.from(photos)));
            console.log('convertFetchedPhotosToStoredFormat addPhotosToAlbum сработалол нормально');
            console.log(`convertFetchedPhotosToStoredFormat storedPhotos = ${Object.keys(storedPhotos)}`);
            return storedPhotos;
        };

        dispatch(photosAreLoading(true));

        return fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => {
                console.log(`photo response = ${response}`);
                if (!response.ok) {
                    console.log(`ошибка в loadAlbumPhotos ${response.statusText}`);
                    throw Error(response.statusText);
                }

                dispatch(photosAreLoading(false));

                return response.json();
            })
            .then(data => {
                console.log(`photos length=${data.length}`);
                dispatch(fetchPhotosSuccess(convertFetchedPhotosToStoredFormat(data)));
                console.log('fetchPhotosSuccess(convertFetchedPhotosToStoredFormat(data)) сработало');
            })
            // .then(data => console.log(`length=${data.length}`) || dispatch(fetchAlbumsSuccess(data)))
            .catch((error) => {
                console.log(`ошибка в loadAlbumPhotos catch ${error}`);
                dispatch(fetchPhotosHasError(true))
            });
    };