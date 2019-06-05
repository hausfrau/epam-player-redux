import {selectAlbum} from '../../actions';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import AlbumsLists from "../../components/AlbumsLists";

class Albums extends Component {
    render() {
        const {onAlbumClick, albums, albumsAreLoading, fetchAlbumsHasError, selectedAlbumId, dispatch} = this.props;
        return (
            <div>
                <AlbumsLists onAlbumClick={onAlbumClick}
                             albums={albums}
                             albumsAreLoading={albumsAreLoading}
                             fetchAlbumsHasError={fetchAlbumsHasError}
                             selectedAlbumId={selectedAlbumId}
                             dispatch={dispatch}/>
            </div>
        );
    };
}

const mapStateToProps = (state) => ({
    albums: state.albums,
    albumsAreLoading: state.albumsAreLoading,
    fetchAlbumsHasError: state.fetchAlbumsHasError,
    selectedAlbumId: state.selectedAlbumId
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
)(Albums);