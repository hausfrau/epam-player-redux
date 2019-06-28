import {FetchPhotosActions, PhotosActions} from "../actions/actionsTypes";
import {convertFetchedPhotosToStoredFormat} from '../utils';

export const photosReducer = (state = [], action) => {
    switch (action.type) {
        case PhotosActions.PHOTOS_ARE_STORING:
            const photos = convertFetchedPhotosToStoredFormat(action.payload);

            return {
                ...state,
                ...photos
            };
        default:
            return state;
    }
};

const initialFetchState = {
    error: null,
    loading: false
};

export const fetchPhotos = (state = initialFetchState, action) => {
    switch (action.type) {
        case FetchPhotosActions.START:
        case FetchPhotosActions.SUCCESS:
        case FetchPhotosActions.ERROR:
            return action.payload;
        default:
            return state;
    }
};