import {loadAlbums} from '../../actions';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import AlbumsLists from "../../components/AlbumsLists";

class Albums extends Component {
    render() {
        const {onAlbumClick, albums, fetchAlbumsError, fetchAlbumsLoading, loadAlbums} = this.props;

        return (
            <AlbumsLists onAlbumClick={onAlbumClick}
                         albums={albums}
                         fetchAlbumsError={fetchAlbumsError}
                         fetchAlbumsLoading={fetchAlbumsLoading}
                         loadAlbums={loadAlbums}/>
        );
    };
}

const mapStateToProps = state => ({
    albums: state.photoAlbum.albums,
    fetchAlbumsError: state.photoAlbum.fetchAlbums.error,
    fetchAlbumsLoading: state.photoAlbum.fetchAlbums.loading
});

const mapDispatchToProps = dispatch => ({
    loadAlbums: () => dispatch(loadAlbums())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Albums);