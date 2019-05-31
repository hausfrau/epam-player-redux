import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom"
// import {syncHistoryWithStore} from 'react-router-redux';
import App from './components/App';
import getStore from './store/createStore';

const store = getStore;
// const history = syncHistoryWithStore(hash, store);

render(
    <Provider store={store}>
        {/*<Router>*/}
        {/*<Router history={history}>*/}
        {/*    <Route path="/" component={App}/>>*/}
            <App/>
        {/*</Router>*/}
    </Provider>,
    document.getElementById('root')
);