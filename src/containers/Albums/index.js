import {loadAlbums} from '../../actions';
// import {albumsReducer, selectAlbum} from '../../actions';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import AlbumsLists from "../../components/AlbumsLists";

class Albums extends Component {
    render() {
        const {onAlbumClick, albums, albumsAreLoading, fetchAlbumsHasError,
            // selectedAlbumId,
            loadAlbums} = this.props;
        return (
            <AlbumsLists onAlbumClick={onAlbumClick}
                         albums={albums}
                         albumsAreLoading={albumsAreLoading}
                         fetchAlbumsHasError={fetchAlbumsHasError}
                         // selectedAlbumId={selectedAlbumId}
                         loadAlbums={loadAlbums}/>
        );
    };
}

const mapStateToProps = state => ({
    albums: state.albums,
    albumsAreLoading: state.albumsAreLoading,
    fetchAlbumsHasError: state.fetchAlbumsHasError,
    // selectedAlbumId: state.selectedAlbumId
});

const mapDispatchToProps = dispatch => ({
    // onAlbumClick: id => dispatch(selectAlbum(id)),
    loadAlbums: () => dispatch(loadAlbums())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Albums);