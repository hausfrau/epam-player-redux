import React, {PureComponent} from 'react';
import FavoritesTracksListItem from '../FavoritesTracksListItem';
import {PlayerName} from '../../constants';
import './favoritesTracksList.css';

export default class FavoritesTracksList extends PureComponent {
    render() {
        const {tracks, players} = this.props;
        const playerFirstCurrentTrackId = players[PlayerName.FIRST].currentTrackId;
        const playerSecondCurrentTrackId = players[PlayerName.SECOND].currentTrackId;

        return <div className="favorites-tracks-wrapper">
            <ul className="favorites-tracks">
                {tracks.map(track => (
                    <FavoritesTracksListItem track={track} key={track.id}
                                             playerFirstCurrentTrackId={playerFirstCurrentTrackId}
                                             playerSecondCurrentTrackId={playerSecondCurrentTrackId}
                                             onFirstPlayButtonClick={() => this.props.onFirstPlayButtonClick(track.id)}
                                             onSecondPlayButtonClick={() => this.props.onSecondPlayButtonClick(track.id)}
                                             onDeleteFavoriteButtonClick={() => this.props.onDeleteFavoriteButtonClick(track.id)}
                    />
                ))}
            </ul>
        </div>
    }
}

