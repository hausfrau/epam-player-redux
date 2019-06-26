import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadAlbumPhotos, loadAlbums} from '../../actions';
// import {loadAlbumPhotos, albumsReducer, selectAlbum, selectPhoto} from '../../actions';
import {Link} from 'react-router-dom';
import './album.css';

class Album extends Component {
    albumId = this.props.match.params.albumId;
    // selectedAlbumParameter = this.props.match.params.albumId;
    onPhotoClick = this.props.onPhotoClick;
// {match: {params: {albumId: {selectedAlbumParameter} }}, onPhotoClick} = this.props;

    componentDidMount() {
        let {albums,
            // albumId,
            loadAlbumPhotos,
            // selectAlbum,
            loadAlbums} = this.props;

        if (Object.keys(albums).length === 0) {
            // if (this.selectedAlbumParameter && !albumId) {
            //     selectAlbum(this.selectedAlbumParameter);
            //     //здесь проверить корректность id
            //     // albumId = this.props.albumId;
            // }

            loadAlbums().then(() => loadAlbumPhotos(this.albumId));
            // albumsReducer().then(() => loadAlbumPhotos(this.selectedAlbumParameter));
        }

        if (albums[this.albumId] && albums[this.albumId].photos.length === 0) {
            loadAlbumPhotos(this.albumId);
        }
    }

    render() {
        // const {state, match, albums, allPhotos} = this.props;
        // const albumId = match.params ? parseInt(match.params.albumId) : 0;
        const {state, albums, allPhotos} = this.props;
        // const {state, albums, allPhotos, match: {params: {albumId}}} = this.props;
        const findPhoto = photoId => allPhotos[photoId];

        console.log(this.props);

        if (state.fetchPhotosHasError) {
            return <p className="photos-wrapper">Loading error!</p>
        }

        if (state.photosAreLoading) {
            return <p className="photos-wrapper">Photos are loading...</p>

        }

        if (this.albumId && albums[this.albumId] && albums[this.albumId].photos.length !== 0) {
            const photos = albums[this.albumId].photos;

            return <div className="photos-wrapper">
                <header className="app__header">
                    <h1>It's photos list</h1>
                    <h2>
                        {`Album is ${this.albumId}. Photo's count = ${photos.length}`}
                    </h2>
                </header>
                <Link className="back" to={`/albums`}>
                    Back
                </Link>
                <ul className="photos">
                    {photos.map(photoId => {
                        const photo = findPhoto(photoId);
                        if (!photo) {
                            return <li className="photo" key={photoId}>
                                {photoId}
                            </li>
                        }

                       {/*<a onClick={() => this.onPhotoClick(photo.id)}*/}
                        return <li className="photo" key={photo.id}>
                            <a className="link"
                               // className={`link${photo.id === state.selectedPhotoId ? ' active-link' : ''}`}
                               href={photo.url}
                               rel="noreferrer noopener"
                               target="_blank">
                                <img className="photo__image" src={photo.url} width="100" height="100" alt=""/>
                                {photo.title}
                            </a>
                        </li>
                    })}
                </ul>
            </div>
        }

        return (
            <div>
                Photos is not found.
            </div>
        );
    }
}

const mapStateToProps = state => ({
    state: state,
    albums: state.albums,
    // albumId: state.selectedAlbumId,
    allPhotos: state.photos,
    albumsAreLoading: state.albumsAreLoading
});

const mapDispatchToProps = dispatch => ({
    loadAlbumPhotos: albumId => dispatch(loadAlbumPhotos(albumId)),
    // onPhotoClick: photoId => dispatch(selectPhoto(photoId)),
    // selectAlbum: albumId => dispatch(selectAlbum(albumId)),
    loadAlbums: () => dispatch(loadAlbums())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Album);