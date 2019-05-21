import React, {Component} from 'react';
import FavoritesTracksListItem from '../FavoritesTracksListItem';
import './FavoritesTracksList.css';

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

        return <div className="Favorites-tracks__wrapper">
            <ul className="Favorites-tracks">
                {console.log(tracks) || tracks.map(track => (
                    <FavoritesTracksListItem track={track} key={track.id}
                                             onPlayButtonClick={() => this.onPlayButtonClick(track)}
                                             onDeleteFavoriteButtonClick={(event) => this.onDeleteFavoriteButtonClick(event, state.tracks, track.id)}
                    />
                ))}
            </ul>
        </div>
    }
}

