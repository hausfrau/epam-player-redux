import React, {Component} from 'react';
import TracksListItem from '../TracksListItem';
import './trackList.css';
import {PLAYER_FIRST, PLAYER_SECOND} from "../../constants";

export default class TracksList extends Component {
    onFirstPlayButtonClick = id => this.props.onFirstPlayButtonClick(id);

    onSecondPlayButtonClick = id => this.props.onSecondPlayButtonClick(id);

    onFavoriteButtonClick = id => this.props.onFavoriteButtonClick(id);

    render() {
        const tracks = this.props.tracks;
        const players = this.props.players;
        const playerFirstCurrentTrackId = players[PLAYER_FIRST].currentTrackId;
        const playerSecondCurrentTrackId = players[PLAYER_SECOND].currentTrackId;

        return <div className="tracks-list-wrapper">
            <p className="tracks-list-header">
                The length of tracks is {tracks.length}
            </p>
            <ul className="tracks-list">
                {tracks.map(track => (
                    <TracksListItem track={track}
                                    playerFirstCurrentTrackId={playerFirstCurrentTrackId}
                                    playerSecondCurrentTrackId={playerSecondCurrentTrackId}
                                    key={track.id}
                                    onFirstPlayButtonClick={() => this.onFirstPlayButtonClick(track.id)}
                                    onSecondPlayButtonClick={() => this.onSecondPlayButtonClick(track.id)}
                                    onFavoriteButtonClick={() => this.onFavoriteButtonClick(track.id)}
                    />
                ))}
            </ul>
        </div>
    }
}

