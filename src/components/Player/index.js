import React from 'react';
import Player from "../../containers/Player";
import {PLAYER_FIRST, PLAYER_SECOND} from "../../constants";
import Tracks from "../../containers/Tracks";
import AddTrack from "../../containers/AddTrack";
import FavoritesTracks from "../../containers/FavoritesTracks";
import './player.css';

export default () =>

 (<div className="player-page">
        <header className="app__header">
            <h1>It's a with REDUX player</h1>
        </header>
        <div className="players-wrapper">
            <Player playerId={PLAYER_FIRST}/>
            <Player playerId={PLAYER_SECOND}/>
        </div>
        <div className="tracks-wrapper">
            <Tracks/>
            <AddTrack/>
        </div>
        <div className="tracks-favorites-wrapper">
            <h2>
                Favorites tracks:
            </h2>
            <FavoritesTracks/>
        </div>
    </div>);
