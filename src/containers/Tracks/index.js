import {connect} from 'react-redux';
import TracksList from '../../components/TracksList';
import {setPlayer, toggleFavorite,} from '../../actions';
import {PLAYER_FIRST, PLAYER_SECOND, PLAYING_STATUS_PLAYING} from '../../constants';

const mapStateToProps = state => ({
    tracks: state.tracks,
    players: state.players
});

const mapDispatchToProps = dispatch => ({
    onFirstPlayButtonClick: id => dispatch(setPlayer(PLAYER_FIRST, id, PLAYING_STATUS_PLAYING)),
    onSecondPlayButtonClick: id => dispatch(setPlayer(PLAYER_SECOND, id, PLAYING_STATUS_PLAYING)),
    onFavoriteButtonClick: id => dispatch(toggleFavorite(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TracksList)