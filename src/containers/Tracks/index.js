import {connect} from 'react-redux';
import TracksList from '../../components/TracksList';
import {setCurrentTrack, setPlayingStatus, toggleFavorite,} from '../../actions';
import {PLAYING_STATUS_PLAYING} from '../../constants';

const mapStateToProps = state => ({
    tracks: state.tracks,
    playingState: state.playingState
});

const mapDispatchToProps = dispatch => ({
    onPlayButtonClick: (id) => dispatch(setCurrentTrack(id)) && dispatch(setPlayingStatus(PLAYING_STATUS_PLAYING)),
    onFavoriteButtonClick: (id) => dispatch(toggleFavorite(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TracksList)