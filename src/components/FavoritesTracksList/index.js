import React, {Component} from 'react';
import FavoritesTracksListItem from '../FavoritesTracksListItem';
import './favoritesTracksList.css';

export default class FavoritesTracksList extends Component {
    onPlayButtonClick = id => this.props.onPlayButtonClick(id);

    onDeleteFavoriteButtonClick = id => this.props.onDeleteFavoriteButtonClick(id);

    render() {
        const tracks = this.props.tracks;
        const state = this.props.state;
        const currentTrackId = state.playingState.currentTrackId;

        return <div className="favorites-tracks-wrapper">
            <ul className="favorites-tracks">
                {tracks.map(track => (
                    <FavoritesTracksListItem track={track} key={track.id}
                                             currentTrackId={currentTrackId}
                                             onPlayButtonClick={() => this.onPlayButtonClick(track.id)}
                                             onDeleteFavoriteButtonClick={() => this.onDeleteFavoriteButtonClick(track.id)}
                    />
                ))}
            </ul>
        </div>
    }
}

