import React, {Component} from 'react';
import FavoritesTracksListItem from '../FavoritesTracksListItem';
import './favoritesTracksList.css';

export default class FavoritesTracksList extends Component {
    onPlayButtonClick(track) {
        this.props.onPlayButtonClick(track.id);
    }

    onDeleteFavoriteButtonClick(event, tracks, id) {
        event.stopPropagation();
        this.props.onDeleteFavoriteButtonClick(tracks, id);
    }

    render() {
        const tracks = this.props.tracks;
        const state = this.props.state;
        const currentTrackId = state.playingState.currentTrackId;

        return <div className="favorites-tracks-wrapper">
            <ul className="favorites-tracks">
                {tracks.map(track => (
                    <FavoritesTracksListItem track={track} key={track.id}
                                             currentTrackId={currentTrackId}
                                             onPlayButtonClick={() => this.onPlayButtonClick(track)}
                                             onDeleteFavoriteButtonClick={(event) => this.onDeleteFavoriteButtonClick(event, state.tracks, track.id)}
                    />
                ))}
            </ul>
        </div>
    }
}

