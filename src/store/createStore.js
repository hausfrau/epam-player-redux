import {createStore} from 'redux';
import playerApp from '../reducers';

let store = createStore(playerApp);

export default store;