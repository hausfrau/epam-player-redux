import React from 'react';
import Tracks from '../../containers/Tracks';
import CurrentTrack from '../../containers/CurrentTrack';
import AddTrack from '../../containers/AddTrack';
import FavoritesTracks from '../../containers/FavoritesTracks';
import './app.css';

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
        <div className="favorites-wrapper">
            <h2>
                Favorites tracks:
            </h2>
            <FavoritesTracks/>
        </div>
    </div>
)