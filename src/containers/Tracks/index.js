import {connect} from 'react-redux';
import TracksList from '../../components/TracksList';
import {setCurrentTrackId} from '../../actions';

const mapStateToProps = state => ({
    tracks: state.tracks,
    state: state
});

const mapDispatchToProps = dispatch => ({
    onTrackClick: (id) => console.log('Нажали', id) || dispatch(setCurrentTrackId(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TracksList)