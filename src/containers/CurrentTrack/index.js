import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import './CurrentTrack.css';
import {setPlayingState} from "../../actions";
import { PLAYING_STATUS_PLAYING, PLAYING_STATUS_PAUSED, PLAYING_STATUS_STOPPED } from '../../constants';

class CurrentTrack extends Component {
    // id = this.props.playingState.currentTrackId;
    // playingStatus = this.props.playingState.playingStatus;

    findTrack = (_id) => this.props.tracks.find(track => track.id === _id);


    // onPlayButtonClick(track) {
    //     console.log(`Сработал onPlayButtonClick current-id=, ${this.props.playingState.currentTrackId}`);
    //     this.props.onPlayButtonClick(track.id);
    // }
    //
    // onFavoriteButtonClick(id) {
    //     console.log(`Сработал onPlayButtonClick current-id=, ${this.props.playingState.currentTrackId}`);
    //     this.props.onPlayButtonClick(track.id);
    // }

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
            <div className="current-track">
                <button
                    className="play-button control-button"
                    onClick={onPlayButtonClick}
                >
                    <img className='play-button__image' src={require("../../images/play.png")} width="24" height="24" alt="play"/>
                </button>
                <button
                    className="pause-button control-button"
                    onClick={onPauseButtonClick}
                >
                    <img className='pause-button__image' src={require("../../images/pause.png")} width="24" height="24" alt="pause"/>
                </button>
                <button
                    className="stop-button control-button"
                    onClick={onStopButtonClick}
                >
                    <img className='stop-button__image' src={require("../../images/stop.png")} width="24" height="24" alt="stop"/>
                </button>
                <p className="current-track__content">
                    {currentTrackId ? `  ${playingStatus}.  Current track is ${name} [${duration}]${isFavorite ? ' and favorite.' : ''}` : 'Track is not selected.'}
                </p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        // currentTrackId: state.playingState.currentTrackId,
        playingState: state.playingState,
        tracks: state.tracks
    }
}

const mapDispatchToProps = dispatch => ({
    // onTrackClick: (id) => console.log('Нажали', id) || dispatch(setCurrentTrackId(id)),
    onPlayButtonClick: () => console.log('Play') || dispatch(setPlayingState(PLAYING_STATUS_PLAYING)),
    onPauseButtonClick: () => console.log('Pause') || dispatch(setPlayingState(PLAYING_STATUS_PAUSED)),
    onStopButtonClick: () => console.log('Stop') || dispatch(setPlayingState(PLAYING_STATUS_STOPPED))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrentTrack);
