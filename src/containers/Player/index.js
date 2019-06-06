import React from 'react';
import connect from "react-redux/es/connect/connect";
import {setPlayer, setPlayingStatus, setTrack} from "../../actions";
import {PLAYING_STATUS_PLAYING, PLAYING_STATUS_PAUSED, PLAYING_STATUS_STOPPED} from '../../constants';
import './player.css';

const CurrentTrack = ({playerId, players, tracks, setPlayingStatus, setTrack}) => {
    const findTrack = _id => tracks.find(track => track.id === _id);
    const findIndex = _id => tracks.findIndex(track => track.id === _id);

    const currentTrackId = players[playerId].currentTrackId;
    const playingStatus = players[playerId].playingStatus;

    const currentTrack = findTrack(currentTrackId) || {
        id: null,
        name: '',
        duration: '',
        isFavorite: false
    };

    const {name, duration, isFavorite} = currentTrack;

    let currentTrackIndex = findIndex(currentTrackId);

    const getPreviousTrackId = () => {
        if (currentTrackId && currentTrackIndex > 0) {
            currentTrackIndex -= 1;
        }
        return currentTrackIndex;
    };

    const getNextTrackId = () => {
        if (currentTrackId && currentTrackIndex < tracks.length - 1) {
            currentTrackIndex += 1;
        }
        return currentTrackIndex;
    };

    const onPlayButtonClick = () => setPlayingStatus(playerId, PLAYING_STATUS_PLAYING);
    const onPauseButtonClick = () => setPlayingStatus(playerId, PLAYING_STATUS_PAUSED);
    const onStopButtonClick = () => setPlayingStatus(playerId, PLAYING_STATUS_STOPPED);
    const onPrevButtonClick = () => (currentTrackId ?
        setTrack(playerId, tracks[getPreviousTrackId()].id)
        :
        null);

    const onNextButtonClick = () => currentTrackId ? setTrack(playerId, tracks[getNextTrackId()].id) : '';

    return (
        <div className="player">
            <button
                className="button--prev button--control"
                disabled={currentTrackId === null || currentTrackIndex === 0}
                onClick={onPrevButtonClick}
            >
                <img className="button-image--prev" src={require("../../images/prev.png")} width="24" height="24"
                     alt="previous track"/>
            </button>
            <button
                className={`button-play-player button--play button--control${playingStatus === PLAYING_STATUS_PLAYING && currentTrackId !== null ?
                    " active"
                    :
                    ""
                    }`}
                disabled={currentTrackId === null}
                onClick={onPlayButtonClick}
            >
                <img className="button-image--play" src={require("../../images/play.png")} width="24" height="24"
                     alt="play"/>
            </button>
            <button
                className={`button--pause button--control${playingStatus === PLAYING_STATUS_PAUSED && currentTrackId !== null ?
                    " active"
                    :
                    ""
                    }`}
                disabled={currentTrackId === null}
                onClick={onPauseButtonClick}
            >
                <img className="button-image--pause" src={require("../../images/pause.png")} width="24" height="24"
                     alt="pause"/>
            </button>
            <button
                className={`button--stop button--control${playingStatus === PLAYING_STATUS_STOPPED && currentTrackId !== null ?
                    " active"
                    :
                    ""
                    }`}
                disabled={currentTrackId === null}
                onClick={onStopButtonClick}
            >
                <img className="button-image--stop" src={require("../../images/stop.png")} width="24" height="24"
                     alt="stop"/>
            </button>
            <button
                className="button--next button--control"
                disabled={currentTrackId === null || currentTrackIndex === tracks.length - 1}
                onClick={onNextButtonClick}
            >
                <img className="button-image--next" src={require("../../images/next.png")} width="24" height="24"
                     alt="next track"/>
            </button>
            <div className="playing-status">
                {currentTrackId ?
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
};

const mapStateToProps = state => ({
        players: state.players,
        tracks: state.tracks
});

export default connect(
    mapStateToProps,
    {setPlayer, setPlayingStatus, setTrack}
)(CurrentTrack);
