import {connect} from 'react-redux';
import {PLAYING_STATUS_PLAYING} from '../../constants';
import FavoritesTracksList from '../../components/FavoritesTracksList';
import {setCurrentTrack, setPlayingStatus, toggleFavorite} from '../../actions';

const getFavoritesTracks = tracks => tracks.filter(track => track.isFavorite);

const mapStateToProps = state => ({
    tracks: getFavoritesTracks(state.tracks),
    state: state
});

const mapDispatchToProps = dispatch => ({
    onPlayButtonClick: (id) => dispatch(setCurrentTrack(id)) && dispatch(setPlayingStatus(PLAYING_STATUS_PLAYING)),
    onDeleteFavoriteButtonClick: (id) => dispatch(toggleFavorite(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FavoritesTracksList);