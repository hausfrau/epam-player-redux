// import React from 'react';
import Player from '../../components/Player';
import {selectAlbum} from "../../actions";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    tracks: state.tracks
});

const mapDispatchToProps = (dispatch) => ({
    onAlbumClick: (id) => {
        dispatch(selectAlbum(id));
    },
    dispatch
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Player);