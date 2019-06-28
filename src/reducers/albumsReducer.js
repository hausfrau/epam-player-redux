import {FetchAlbumsActions, AlbumsActions, PhotosActions} from '../actions/actionsTypes';
import {convertFetchedAlbumsToStoredFormat, getPhotosIds} from "../utils";

const initialFetchState = {
    error: null,
    loading: false
};

export const fetchAlbums = (state = initialFetchState, action) => {
    switch (action.type) {
        case FetchAlbumsActions.START:
        case FetchAlbumsActions.SUCCESS:
        case FetchAlbumsActions.ERROR:
            return action.payload;
        default:
            return state;
    }
};

export const albumsReducer = (state = [], action) => {
    switch (action.type) {
        case AlbumsActions.ALBUMS_ARE_STORING:
            return convertFetchedAlbumsToStoredFormat(action.payload);
        case PhotosActions.ADD_PHOTOS_TO_ALBUM:
            const albumId = action.payload.albumId;
            const storedPhotosIds = getPhotosIds(action.payload.fetchedPhotos);

            return {
                ...state,
                [albumId]: {
                    ...state[albumId],
                    photos: storedPhotosIds
                }
            };
        default:
            return state;
    }
};