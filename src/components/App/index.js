import React, {Component} from 'react';
// import Tracks from '../../containers/Tracks';
// import Player from '../../containers/Player';
import Player from '../../pages/PlayerPage';
// import AddTrack from '../../containers/AddTrack';
// import FavoritesTracks from '../../containers/FavoritesTracks';
import Albums from '../../containers/Albums';
import PagesNavigation from '../../containers/PagesNavigation';
// import {PLAYER_FIRST, PLAYER_SECOND} from '../../constants';
// import {Router, Route} from 'react-router';
// import {BrowserRouter as Router} from "react-router-dom";
// import {BrowserRouter as Router, Route, Link} from "react-router-dom"

import './app.css';

// const PlayerPage = () => <Player/>;
//
// const AlbumsPage = () => <Albums/>;

export default class App extends Component {

    render() {
        return <div className="app">
                {/*<Player/>*/}
                {/*<Albums/>*/}
                <PagesNavigation/>
                {/*{this.props.children}*/}
                {/*<Route path='/player' component={PlayerPage}/>*/}
                {/*<Route path='/albums' component={AlbumsPage}/>*/}
                {/*<Route path={'/player'} component={<Player/>}/>*/}
                {/*<Route path={'/albums'} component={<Albums/>}/>*/}
                {/*<header className="app__header">*/}
                {/*    <h1>It's a with REDUX player</h1>*/}
                {/*</header>*/}
                {/*<div className="players-wrapper">*/}
                {/*    <Player playerId={PLAYER_FIRST}/>*/}
                {/*    <Player playerId={PLAYER_SECOND}/>*/}
                {/*</div>*/}
                {/*<div className="tracks-wrapper">*/}
                {/*    <Tracks/>*/}
                {/*    <AddTrack/>*/}
                {/*</div>*/}
                {/*<div className="tracks-favorites-wrapper">*/}
                {/*    <h2>*/}
                {/*        Favorites tracks:*/}
                {/*    </h2>*/}
                {/*    <FavoritesTracks/>*/}
                {/*</div>*/}
                {/*<Albums/>*/}
            </div>
    }
}