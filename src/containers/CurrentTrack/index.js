import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import './CurrentTrack.css';

class CurrentTrack extends Component {
    id = this.props.currentTrackId;

    findTrack = (_id) => this.props.tracks.find(track => track.id === _id);

    render() {
        const currentTrackId = this.props.currentTrackId;

        const currentTrack = this.findTrack(currentTrackId) || {
            id: 0,
            name: '',
            duration: '',
            isFavorite: false
        };

        const {name, duration, isFavorite} = currentTrack;

        return (
            <div className="current-track">
                {currentTrackId ? `Current track is ${name} ${duration}${isFavorite ? ' and favorite' : ''}` : 'Track is not selected'}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentTrackId: state.currentTrackId,
        tracks: state.tracks
    }
}

export default connect(mapStateToProps)(CurrentTrack);
