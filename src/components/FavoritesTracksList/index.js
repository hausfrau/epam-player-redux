import React, {Component} from 'react';
import FavoritesTracksListItem from '../FavoritesTracksListItem';
import './FavoritesTracksList.css';

export default class FavoritesTracksList extends Component {
    onFavoriteTrackClick(track) {
        this.props.onFavoriteTrackClick(track.id);
    }

    onDeleleFavoriteButtonClick(event, tracks, id) {
        console.log(`Сработал onDeleleFavoriteButtonClick favoriteTrackId=${id}   ${tracks}`);
        event.stopPropagation();
        this.props.onDeleleFavoriteButtonClick(tracks, id);        
    }

    render() {
        const tracks = this.props.tracks;
        const state = this.props.state;

        return <div className="Favorites-tracks__wrapper">
            <ul className="Favorites-tracks">
                {console.log(tracks) || tracks.map(track => (
                    <FavoritesTracksListItem track={track} key={track.id}
                                    onClick={() => this.onFavoriteTrackClick(track)}
                                    onDeleleFavoriteButtonClick={(event) => this.onDeleleFavoriteButtonClick(event, state.tracks, track.id)}

                    />
                ))}
            </ul>
        </div>
    }
}

