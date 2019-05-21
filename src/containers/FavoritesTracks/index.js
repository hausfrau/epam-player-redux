import {connect} from 'react-redux';
import {PLAYING_STATUS_PLAYING, SHOW_FAVORITES_TRACKS} from '../../constants';
import FavoritesTracksList from '../../components/FavoritesTracksList';
import {setCurrentTrackId, setPlayingState, toggleFavorite} from '../../actions';

const getFavoritesTracks = (tracks, filter) => {
    switch (filter) {
        case SHOW_FAVORITES_TRACKS:
            return tracks.filter(track => track.isFavorite);
        default:
            throw new Error(`Unknown filter: ${filter}`);
    }
};

const mapStateToProps = state => ({
    tracks: getFavoritesTracks(state.tracks, SHOW_FAVORITES_TRACKS),
    state: state
});

const mapDispatchToProps = dispatch => ({
    onPlayButtonClick: (id) => dispatch(setCurrentTrackId(id)) && dispatch(setPlayingState(PLAYING_STATUS_PLAYING)),
    onDeleteFavoriteButtonClick: (tracks, id) => dispatch(toggleFavorite(tracks, id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FavoritesTracksList);