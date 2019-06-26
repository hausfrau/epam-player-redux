import {loadAlbums} from '../../actions';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import AlbumsLists from "../../components/AlbumsLists";

class Albums extends Component {
    render() {
        const {onAlbumClick, albums, albumsAreLoading, fetchAlbumsHasError, loadAlbums} = this.props;
        return (
            <AlbumsLists onAlbumClick={onAlbumClick}
                         albums={albums}
                         albumsAreLoading={albumsAreLoading}
                         fetchAlbumsHasError={fetchAlbumsHasError}
                         loadAlbums={loadAlbums}/>
        );
    };
}

const mapStateToProps = state => ({
    albums: state.albums,
    albumsAreLoading: state.albumsAreLoading,
    fetchAlbumsHasError: state.fetchAlbumsHasError,
});

const mapDispatchToProps = dispatch => ({
    loadAlbums: () => dispatch(loadAlbums())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Albums);