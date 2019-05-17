import React, {Component} from 'react';
import FavoritesTracksListItem from '../FavoritesTracksListItem';

export default class FavoritesTracksList extends Component {
    onTrackClick(track) {
        this.props.onTrackClick(track.id);
    }

    render() {
        const tracks = this.props.tracks;

        return <div>
            <ul className="tracks-list">
                {console.log(tracks) || tracks.map(track => (
                    <FavoritesTracksListItem track={track} key={track.id}
                                    onClick={this.onTrackClick.bind(this, track)}
                    />
                ))}
            </ul>
        </div>
    }
}

