import {createStore} from 'redux';
import playerApp from '../reducers/reducer';
import { addTrack, setCurrentTrackId } from '../actions/actions';

let store = createStore(playerApp);

console.log('state = ', store.getState());


let unsubscribe = store.subscribe(()=> console.log(store.getState()));

store.dispatch(addTrack(        {
    id: 10,
    name: "Track 10",
    duration: "03.20"
}));

store.dispatch(addTrack(        {
    id: 11,
    name: "Track 11",
    duration: "05.20"
}));

store.dispatch(addTrack(        {
    id: 12,
    name: "Track 12",
    duration: "02.20"
}));

store.dispatch(setCurrentTrackId({id: 12}));


unsubscribe();

export default store;