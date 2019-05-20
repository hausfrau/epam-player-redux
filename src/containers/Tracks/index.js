import { connect } from 'react-redux';
import TracksList from '../../components/TracksList';
import { setCurrentTrackId, toggleFavorite } from '../../actions';

const mapStateToProps = state => ({
    tracks: state.tracks,
    state: state
});

const mapDispatchToProps = dispatch => ({
    // onTrackClick: (id) => console.log('Нажали', id) || dispatch(setCurrentTrackId(id)),
    onPlayButtonClick: (id) => console.log('Нажали', id) || dispatch(setCurrentTrackId(id)),
    onFavoriteButtonClick: (tracks, id) => console.log(`Добавить в избранное id=${id} tracks=${tracks}`) || 
                            dispatch(toggleFavorite(tracks, id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TracksList)