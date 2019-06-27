import {TracksActions} from '../actions/actionsTypes';

const {ADD_TRACK, TOGGLE_FAVORITE, LOAD_TRACKS} = TracksActions;

const initialState = [
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
    },
];

export default (state = [], action) => {
    switch (action.type) {
        case LOAD_TRACKS:
            return initialState;
        case ADD_TRACK:
            return [
                ...state,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    duration: action.payload.duration,
                    isFavorite: false
                }
            ];
        case TOGGLE_FAVORITE:
            return state.map(track => (track.id === action.payload) ?
                {...track, isFavorite: !track.isFavorite}
                :
                track
            );
        default:
            return state;
    }
};