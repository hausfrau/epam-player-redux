import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom"
// import {syncHistoryWithStore} from 'react-router-redux';
import App from './components/App';
import getStore from './store/createStore';
// import {Route} from "react-router";
import {BrowserRouter as Router, Route} from "react-router-dom"
import PlayerPage from "./pages/PlayerPage";
import AlbumsPage from "./pages/AlbumsPage";
// import Albums from "./containers/Albums";
// import Album from "./containers/Album";


const store = getStore;
// const PlayerPage = () => <Player/>;

// const AlbumsPage = () => <Albums/>;

// const AlbumPage = () => <Album/>;
// const history = syncHistoryWithStore(hash, store);

render(
    <Provider store={store}>
        {/*<Router>*/}
        {/*<Router history={history}>*/}
        {/*    <Route path="/" component={App}/>>*/}
        {/*    <App/>*/}
        {/*</Router>*/}
        {/*<Router history={hashHistory}>*/}
        <Router>
            <Route path="/" component={App}/>
                <Route path='/player' component={PlayerPage}/>
                <Route path='/albums' component={AlbumsPage}/>
                {/*<Route path='/albums/:albumId' component={AlbumPage}/>*/}
            {/*</Route>*/}
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);