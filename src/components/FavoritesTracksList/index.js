import React, {Component} from 'react';
import FavoritesTracksListItem from '../FavoritesTracksListItem';
import {PLAYER_FIRST, PLAYER_SECOND} from '../../constants';
import './favoritesTracksList.css';

export default class FavoritesTracksList extends Component {
    onFirstPlayButtonClick = id => this.props.onFirstPlayButtonClick(id);

    onSecondPlayButtonClick = id => this.props.onSecondPlayButtonClick(id);

    onDeleteFavoriteButtonClick = id => this.props.onDeleteFavoriteButtonClick(id);

    render() {
        const tracks = this.props.tracks;
        const players = this.props.players;
        const playerFirstCurrentTrackId = players[PLAYER_FIRST].currentTrackId;
        const playerSecondCurrentTrackId = players[PLAYER_SECOND].currentTrackId;

        return <div className="favorites-tracks-wrapper">
            <ul className="favorites-tracks">
                {tracks.map(track => (
                    <FavoritesTracksListItem track={track} key={track.id}
                                             playerFirstCurrentTrackId={playerFirstCurrentTrackId}
                                             playerSecondCurrentTrackId={playerSecondCurrentTrackId}
                                             onFirstPlayButtonClick={() => this.onFirstPlayButtonClick(track.id)}
                                             onSecondPlayButtonClick={() => this.onSecondPlayButtonClick(track.id)}
                                             onDeleteFavoriteButtonClick={() => this.onDeleteFavoriteButtonClick(track.id)}
                    />
                ))}
            </ul>
        </div>
    }
}

