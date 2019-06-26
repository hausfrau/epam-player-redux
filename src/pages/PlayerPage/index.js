import Player from '../../components/Player';
import {loadTracks} from "../../actions";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    tracks: state.tracks
});

const mapDispatchToProps = dispatch => ({
    loadTracks: () => dispatch(loadTracks())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Player);