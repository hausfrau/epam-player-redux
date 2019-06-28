import {connect} from 'react-redux';
import TracksList from '../../components/TracksList';
import {setPlayer, toggleFavorite,} from '../../actions';
import {PlayingStatus, PlayerName} from '../../constants';

const mapStateToProps = state => ({
    tracks: state.player.tracks,
    players: state.player.players
});

const mapDispatchToProps = dispatch => ({
    onFirstPlayButtonClick: id => dispatch(setPlayer(PlayerName.FIRST, id, PlayingStatus.PLAYING)),
    onSecondPlayButtonClick: id => dispatch(setPlayer(PlayerName.SECOND, id, PlayingStatus.PLAYING)),
    onFavoriteButtonClick: id => dispatch(toggleFavorite(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TracksList)