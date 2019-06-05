import React, {Component} from 'react';
import Player from "../../containers/Player";
import {PLAYER_FIRST, PLAYER_SECOND} from "../../constants";
import Tracks from "../../containers/Tracks";
import AddTrack from "../../containers/AddTrack";
import FavoritesTracks from "../../containers/FavoritesTracks";
import './player.css';
import {Link} from "react-router-dom";
import {loadTracks} from "../../actions";

export default class extends Component {
    componentDidMount() {
        if (this.props.tracks.length === 0) {
            this.props.dispatch(loadTracks());
        }
    }

    render() {
        return <div className="player-page">
            <header className="app__header">
                <h1>It's a with REDUX player</h1>
            </header>
            <Link className="back" to="/">
                Back
            </Link>
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
        </div>;
    }
}
