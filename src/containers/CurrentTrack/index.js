import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {setPlayingState} from "../../actions";
import {PLAYING_STATUS_PLAYING, PLAYING_STATUS_PAUSED, PLAYING_STATUS_STOPPED} from '../../constants';
import './currentTrack.css';

class CurrentTrack extends Component {
    findTrack = (_id) => this.props.tracks.find(track => track.id === _id);

    render() {
        const currentTrackId = this.props.playingState.currentTrackId;
        const playingStatus = this.props.playingState.playingStatus;
        const onPlayButtonClick = this.props.onPlayButtonClick;
        const onPauseButtonClick = this.props.onPauseButtonClick;
        const onStopButtonClick = this.props.onStopButtonClick;

        const currentTrack = this.findTrack(currentTrackId) || {
            id: 0,
            name: '',
            duration: '',
            isFavorite: false
        };

        const {name, duration, isFavorite} = currentTrack;

        return (
            <div className="track--current">
                <button
                    className={`button--play button--control${playingStatus === PLAYING_STATUS_PLAYING ? " active" : ""}`}
                    onClick={onPlayButtonClick}
                >
                    <img className="button-image--play" src={require("../../images/play.png")} width="24" height="24"
                         alt="play"/>
                </button>
                <button
                    className="button--pause button--control"
                    onClick={onPauseButtonClick}
                >
                    <img className="button-image--pause" src={require("../../images/pause.png")} width="24" height="24"
                         alt="pause"/>
                </button>
                <button
                    className="button--stop button--control"
                    onClick={onStopButtonClick}
                >
                    <img className="button-image--stop" src={require("../../images/stop.png")} width="24" height="24"
                         alt="stop"/>
                </button>
                <p className="track-content">
                    {currentTrackId ? `  ${playingStatus}.  Current track is ${name} [${duration}]${isFavorite ? ' and favorite.' : ''}` : 'Track is not selected.'}
                </p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        playingState: state.playingState,
        tracks: state.tracks
    }
}

const mapDispatchToProps = dispatch => ({
    onPlayButtonClick: () => dispatch(setPlayingState(PLAYING_STATUS_PLAYING)),
    onPauseButtonClick: () => dispatch(setPlayingState(PLAYING_STATUS_PAUSED)),
    onStopButtonClick: () => dispatch(setPlayingState(PLAYING_STATUS_STOPPED))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrentTrack);
