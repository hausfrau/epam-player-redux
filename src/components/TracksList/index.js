import React, {Component} from 'react';
import TracksListItem from '../TracksListItem';
import './TrackList.css';

export default class TracksList extends Component {
    onTrackClick(track) {
        console.log(`Сработал onclick current-id=, ${this.props.state.currentTrackId}`);
        this.props.onTrackClick(track.id);        
    }

    onFavoriteButtonClick(event, tracks, id) {
        console.log(`Сработал onfavoriteclick favoriteTrackId=${id}   ${tracks}`);
        event.stopPropagation();
        this.props.onFavoriteButtonClick(tracks, id);        
    }

    render() {
        const tracks = this.props.tracks;
        const currentTrackId = this.props.state.currentTrackId;

        return <div className="Tracks__wrapper">
                    <p className="Tracks__header">The length of tracks is {tracks.length}</p>

                    <ul className="Tracks">
                        {console.log(tracks) || tracks.map(track => (
                            <TracksListItem track={track} currentTrackId={currentTrackId} key={track.id}
                                    onClick={() => this.onTrackClick(track)}
                                    onFavoriteButtonClick={(event, id) => this.onFavoriteButtonClick(event, this.props.state.tracks, track.id)}
                            />
                        ))}
                    </ul>
                </div>
    }
}

