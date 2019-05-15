import {connect} from 'react-redux';
import { SHOW_FAVORITES_TRACKS } from '../../constants/Page';
import FavoritesTracksList from '../../components/FavoritesTracksList';


const getFavoritesTracks = (tracks, filter) => {
    switch (filter) {
        case SHOW_FAVORITES_TRACKS:
            return tracks.filter(track => track.isFavorite);
        default:
            throw new Error(`Unknown filter: ${filter}`);
    }
}

const mapStateToProps = state => ({
    tracks: getFavoritesTracks(state.tracks, SHOW_FAVORITES_TRACKS)
})

export default connect(
    mapStateToProps
)(FavoritesTracksList)