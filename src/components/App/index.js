import React from 'react';
import Tracks from '../../containers/Tracks';
import CurrentTrack from '../../containers/CurrentTrack';
import './App.css';
import AddTrack from '../../containers/AddTrack';
import FavoritesTracks from '../../containers/FavoritesTracks';

export default () => (
    <div className="app">
        <header className="app__header">
            <h1>It's a with REDUX-1 player</h1>
        </header>
        <div className="left-side-wrapper">
            <Tracks/>
            <AddTrack/>
            <CurrentTrack/>
        </div>
        <div className="favorites-tracks-wrapper">
            <h2 className="favorites-tracks-header">
                Favorites tracks:
            </h2>
            <FavoritesTracks/>
        </div>
    </div>
)