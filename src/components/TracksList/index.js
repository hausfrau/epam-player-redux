import React, {PureComponent} from 'react';
import TracksListItem from '../TracksListItem';
import './trackList.css';
import {PlayerName} from "../../constants";

export default class TracksList extends PureComponent {
    render() {
        const {tracks, players} = this.props;
        const playerFirstCurrentTrackId = players[PlayerName.FIRST].currentTrackId;
        const playerSecondCurrentTrackId = players[PlayerName.SECOND].currentTrackId;

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
                                    onFirstPlayButtonClick={() => this.props.onFirstPlayButtonClick(track.id)}
                                    onSecondPlayButtonClick={() => this.props.onSecondPlayButtonClick(track.id)}
                                    onFavoriteButtonClick={() => this.props.onFavoriteButtonClick(track.id)}
                    />
                ))}
            </ul>
        </div>
    }
}

