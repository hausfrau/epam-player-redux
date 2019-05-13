import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
// import thunk from 'redux-thunk';
// import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import getStore from './store/createStore';





// function playlist(state = {
//     tracks: [],
//     currentTrackId: 0
// }, action) {
//     if (action.type === 'ADD_TRACK') {
//         console.log(action);
//         return Object.assign({}, state,
//             {tracks: [...state.tracks, action.payload]}
//         );
//     }
//     return state;
// }





let store = getStore;

console.log(store.getState());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

//
// store.subscribe(() => {
//     console.log('subscribe', store.getState());
// })
//
// store.dispatch({type: 'ADD_TRACK', payload: 'Track-1'});
// store.dispatch({type: 'ADD_TRACK', payload: 'Track-2'});

// ReactDOM.render(<App />, document.getElementById('root'));
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
