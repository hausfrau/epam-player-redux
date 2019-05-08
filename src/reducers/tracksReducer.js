import { ADD_TRACK } from '../actions/actions';

const initialState = [
        {
            id: 1,
            name: "Track 1",
            duration: "04.20"
        },
        {
            id: 2,
            name: "Track 2",
            duration: "02.00"
        },
        {
            id: 3,
            name: "Track 3",
            duration: "03.32"
        },
        {
            id: 4,
            name: "Track 4",
            duration: "05.10"
        },
        {
            id: 5,
            name: "Track 5",
            duration: "03.48"
        },
    ];

function tracks(state = initialState, action) {
    switch (action.type) {
        case ADD_TRACK:
            return [
                ...state,
                {
                    id: action.track.id,
                    name: action.track.name,
                    duration: action.track.duration
                }
            ];
        default:
            return state;
    }
}

export default tracks;