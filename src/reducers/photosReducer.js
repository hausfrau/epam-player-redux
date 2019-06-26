import {PHOTOS_ACTIONS} from "../actions/actionsTypes";

const {
    FETCH_PHOTOS_HAS_ERROR,
    FETCH_PHOTOS_SUCCESS,
    PHOTOS_ARE_LOADING
} = PHOTOS_ACTIONS;

export const photosReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_PHOTOS_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
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
        case FETCH_PHOTOS_HAS_ERROR:
            return action.payload;
        default:
            return state;
    }
};