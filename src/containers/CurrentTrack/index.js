import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import './CurrentTrack.css';

class CurrentTrack extends Component {
    id = console.log('this.props.tracks', this.props.tracks) || this.props.currentTrackId;

    findTrack = (_id) => console.log('id=', _id) || this.props.tracks.find(track => track.id === _id);

    render() {
        const currentTrackId = console.log('this.id', this.id) || this.props.currentTrackId;

        const currentTrack = this.findTrack(currentTrackId) || {
            id: 0,
            name: "",
            duration: ""
        };

        const {name, duration} = console.log('currentTrack', currentTrack) || currentTrack;

        return (
            <div className="current-track">
                {currentTrackId ? `Current track is ${name} ${duration}` : 'Track is not selected'}
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
