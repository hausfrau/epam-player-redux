// import React from 'react';
import {selectAlbum, loadAlbumPhotos} from '../../actions';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import AlbumsLists from "../../components/AlbumsLists";
import Album from '../../containers/Album';
import {Route} from "react-router-dom";

class Albums extends Component {
    render() {
        const {onAlbumClick, albums, albumsAreLoading, fetchAlbumsHasError, dispatch} = this.props;
        return (
            <div>

                {/*<Route*/}
                {/*    path={`${match.path}/:albumId`}*/}
                {/*    component={Album}*/}
                {/*/>*/}
                <AlbumsLists onAlbumClick = {onAlbumClick} albums = {albums} albumsAreLoading = {albumsAreLoading} fetchAlbumsHasError = {fetchAlbumsHasError} dispatch = {dispatch}/>
            </div>
        );
    };
}

const mapStateToProps = (state) => ({
    albums: state.albums,
    albumsAreLoading: state.albumsAreLoading,
    fetchAlbumsHasError : state.fetchAlbumsHasError
});

const mapDispatchToProps = (dispatch) => ({
    onAlbumClick: (id) => {
        console.log(`выбрали альбом = ${id}`);
        dispatch(selectAlbum(id));
        // dispatch(loadAlbumPhotos(id));
    },
    dispatch
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Albums);