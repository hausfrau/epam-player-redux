import React from 'react';
import Tracks from '../../containers/Tracks';
import CurrentTrack from '../../containers/CurrentTrack';
import './App.css';
import AddTrack from '../../containers/AddTrack';

export default () => (
    <div className="App">
        <header className="App-header">
            <h1>It's a with REDUX player</h1>
        </header>
        <Tracks/>
        <AddTrack/>
        <CurrentTrack/>
    </div>
)