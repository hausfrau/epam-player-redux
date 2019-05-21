import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App';
import getStore from './store/createStore';

let store = getStore;

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)