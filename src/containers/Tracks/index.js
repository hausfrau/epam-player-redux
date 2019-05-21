import {connect} from 'react-redux';
import TracksList from '../../components/TracksList';
import {setCurrentTrackId, setPlayingState, toggleFavorite,} from '../../actions';
import {PLAYING_STATUS_PLAYING} from '../../constants';

const mapStateToProps = state => ({
    tracks: state.tracks,
    playingState: state.playingState
});

const mapDispatchToProps = dispatch => ({
    onPlayButtonClick: (id) => dispatch(setCurrentTrackId(id)) && dispatch(setPlayingState(PLAYING_STATUS_PLAYING)),
    onFavoriteButtonClick: (tracks, id) => dispatch(toggleFavorite(tracks, id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TracksList)