import {connect} from 'react-redux';
import {PlayingStatus, PlayerName} from '../../constants';
import FavoritesTracksList from '../../components/FavoritesTracksList';
import {setPlayer, toggleFavorite} from '../../actions';

const getFavoritesTracks = tracks => tracks.filter(track => track.isFavorite);

const mapStateToProps = state => ({
    tracks: getFavoritesTracks(state.player.tracks),
    players: state.player.players
});

const mapDispatchToProps = dispatch => ({
    onFirstPlayButtonClick: id => dispatch(setPlayer(PlayerName.FIRST, id, PlayingStatus.PLAYING)),
    onSecondPlayButtonClick: id => dispatch(setPlayer(PlayerName.SECOND, id, PlayingStatus.PLAYING)),
    onDeleteFavoriteButtonClick: id => dispatch(toggleFavorite(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FavoritesTracksList);