import React, {PureComponent} from 'react';
import Player from "../../containers/Player";
import {PlayerName} from "../../constants";
import Tracks from "../../containers/Tracks";
import AddTrack from "../../containers/AddTrack";
import FavoritesTracks from "../../containers/FavoritesTracks";
import './player.css';
import {Link} from "react-router-dom";

export default class extends PureComponent {
    componentDidMount() {
        const {tracks, loadTracks} = this.props;

        if (tracks.length === 0) {
            loadTracks();
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
                <Player playerId={PlayerName.FIRST}/>
                <Player playerId={PlayerName.SECOND}/>
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
