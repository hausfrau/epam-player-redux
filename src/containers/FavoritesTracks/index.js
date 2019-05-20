import {connect} from 'react-redux';
import { SHOW_FAVORITES_TRACKS } from '../../constants';
import FavoritesTracksList from '../../components/FavoritesTracksList';
import { setCurrentTrackId, toggleFavorite } from '../../actions';


const getFavoritesTracks = (tracks, filter) => {
    switch (filter) {
        case SHOW_FAVORITES_TRACKS:
            return tracks.filter(track => track.isFavorite);
        default:
            throw new Error(`Unknown filter: ${filter}`);
    }
}

const mapStateToProps = state => ({
    tracks: getFavoritesTracks(state.tracks, SHOW_FAVORITES_TRACKS),
    state: state
})

const mapDispatchToProps = dispatch => ({
    onFavoriteTrackClick: (id) => console.log('Нажали в избранных ', id) || dispatch(setCurrentTrackId(id)),
    onDeleleFavoriteButtonClick: (tracks, id) => console.log(`Удалили из избранного id=${id} tracks=${tracks}`) || 
                            dispatch(toggleFavorite(tracks, id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FavoritesTracksList)