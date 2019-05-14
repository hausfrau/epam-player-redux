import React, {Component} from 'react';
import TracksListItem from '../TracksListItem';
import './TrackList.css';

export default class TracksList extends Component {
    onTrackClick(track) {
        this.props.onTrackClick(track.id);
    }

    render() {
        const tracks = this.props.tracks;

        return <div>
            <p>The length of tracks is {tracks.length}</p>

            <ul className="tracks-list">
                {console.log(tracks) || tracks.map(track => (
                    <TracksListItem track={track} key={track.id}
                                    onClick={this.onTrackClick.bind(this, track)}
                    />
                ))}
            </ul>
        </div>
    }
}

