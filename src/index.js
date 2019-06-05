import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App';
import getStore from './store/createStore';
import {BrowserRouter as Router, Route} from "react-router-dom"
import PlayerPage from "./pages/PlayerPage";
import AlbumsPage from "./pages/AlbumsPage";

const store = getStore;

render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App}/>
            <Route path='/player' component={PlayerPage}/>
            <Route path='/albums' component={AlbumsPage}/>
        </Router>
    </Provider>,
    document.getElementById('root')
);