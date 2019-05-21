import React, {Component} from 'react';
import TracksListItem from '../TracksListItem';
import './trackList.css';

export default class TracksList extends Component {
    onPlayButtonClick = (id) => this.props.onPlayButtonClick(id);

    onFavoriteButtonClick = (id) => this.props.onFavoriteButtonClick(id);

    render() {
        const tracks = this.props.tracks;
        const currentTrackId = this.props.playingState.currentTrackId;

        return <div className="tracks-wrapper">
            <p className="tracks-header">The length of tracks is {tracks.length}</p>

            <ul className="tracks">
                {tracks.map(track => (
                    <TracksListItem track={track} currentTrackId={currentTrackId} key={track.id}
                                    onPlayButtonClick={() => this.onPlayButtonClick(track.id)}
                                    onFavoriteButtonClick={() => this.onFavoriteButtonClick(track.id)}
                    />
                ))}
            </ul>
        </div>
    }
}

