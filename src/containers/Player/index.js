import React from 'react';
import connect from "react-redux/es/connect/connect";
import {setPlayer, setPlayingStatus} from "../../actions";
import {PLAYING_STATUS_PLAYING, PLAYING_STATUS_PAUSED, PLAYING_STATUS_STOPPED} from '../../constants';
import './player.css';

function CurrentTrack({playerId, players, tracks, setPlayingStatus}) {
    const findTrack = (_id) => tracks.find(track => track.id === _id);

    const currentTrackId = players[playerId].currentTrackId;
    const playingStatus = players[playerId].playingStatus;

    const currentTrack = findTrack(currentTrackId) || {
        id: null,
        name: '',
        duration: '',
        isFavorite: false
    };

    const {name, duration, isFavorite} = currentTrack;

    const onPlayButtonClick = () => setPlayingStatus(playerId, PLAYING_STATUS_PLAYING);
    const onPauseButtonClick = () => setPlayingStatus(playerId, PLAYING_STATUS_PAUSED);
    const onStopButtonClick = () => setPlayingStatus(playerId, PLAYING_STATUS_STOPPED);

    return (
        <div className="player">
            <button
                className={`button-play-player button--play button--control${playingStatus === PLAYING_STATUS_PLAYING ?
                    " active"
                    :
                    ""}`}
                onClick={onPlayButtonClick}
            >
                <img className="button-image--play" src={require("../../images/play.png")} width="24" height="24"
                     alt="play"/>
            </button>
            <button
                className={`button--pause button--control${playingStatus === PLAYING_STATUS_PAUSED ? " active" : ""}`}
                onClick={onPauseButtonClick}
            >
                <img className="button-image--pause" src={require("../../images/pause.png")} width="24" height="24"
                     alt="pause"/>
            </button>
            <button
                className={`button--stop button--control${playingStatus === PLAYING_STATUS_STOPPED && currentTrackId !== null ?
                    " active"
                    :
                    ""}`}
                onClick={onStopButtonClick}
            >
                <img className="button-image--stop" src={require("../../images/stop.png")} width="24" height="24"
                     alt="stop"/>
            </button>
            <div className="playing-status">{currentTrackId ?
                `  ${playingStatus}.`
                :
                ""}</div>
            <p className="track-content">
                {currentTrackId ?
                    `  Current track is ${name} [${duration}]${isFavorite ?
                        ' and favorite.'
                        :
                        ''}`
                    :
                    'Track is not selected.'}
            </p>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        players: state.players,
        tracks: state.tracks
    }
}

export default connect(
    mapStateToProps,
    {setPlayer, setPlayingStatus}
)(CurrentTrack);
