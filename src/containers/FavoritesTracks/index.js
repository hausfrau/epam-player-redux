import {connect} from 'react-redux';
import {PLAYER_FIRST, PLAYER_SECOND, PLAYING_STATUS_PLAYING} from '../../constants';
import FavoritesTracksList from '../../components/FavoritesTracksList';
import {setPlayer, toggleFavorite} from '../../actions';

const getFavoritesTracks = tracks => tracks.filter(track => track.isFavorite);

const mapStateToProps = state => ({
    tracks: getFavoritesTracks(state.tracks),
    players: state.players
});

const mapDispatchToProps = dispatch => ({
    onFirstPlayButtonClick: (id) => dispatch(setPlayer(PLAYER_FIRST, id, PLAYING_STATUS_PLAYING)),
    onSecondPlayButtonClick: (id) => dispatch(setPlayer(PLAYER_SECOND, id, PLAYING_STATUS_PLAYING)),
    onDeleteFavoriteButtonClick: (id) => dispatch(toggleFavorite(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FavoritesTracksList);