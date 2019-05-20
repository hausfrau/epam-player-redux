import { ADD_TRACK, TOGGLE_FAVORITE } from '../constants';

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

function tracks(state = initialState, action) {
    console.log(`tracksReducer  state=${state}`);
    switch (action.type) {
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
            return action.payload.tracks.map(track => {
                console.log(`track.id=${track.id} action.payload.id=${action.payload.favoriteTrackId}  track.id === action.id ${track.id === action.payload.favoriteTrackId}  track.isFavorite=${track.isFavorite} !track.isFavorite=${!track.isFavorite}`);
                return (track.id === action.payload.favoriteTrackId)
                  ? {...track, isFavorite: !track.isFavorite}
                  : track
            });
        default:
            return state;
    }
}

export default tracks;