import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadAlbumPhotos, loadAlbums, selectAlbum, selectPhoto} from '../../actions';
import {Link} from 'react-router-dom';
import './album.css';

class Album extends Component {
    selectedAlbumParameter = this.props.match.params.albumId;
    onPhotoClick = this.props.onPhotoClick;

    componentDidMount() {
        let {albums, albumId, loadAlbumPhotos} = this.props;

        if (Object.keys(albums).length === 0) {
            if (this.selectedAlbumParameter && !albumId) {
                this.props.dispatch(selectAlbum(this.selectedAlbumParameter));
                albumId = this.props.albumId;
            }

            this.props.dispatch(loadAlbums()).then(() => loadAlbumPhotos(this.selectedAlbumParameter));
        }

        if (albums[albumId] && albums[albumId].photos.length === 0) {
            loadAlbumPhotos(albumId);
        }
    }

    render() {
        const {match, albums, allPhotos} = this.props;
        const albumId = match.params ? parseInt(match.params.albumId) : 0;
        const findPhoto = (photoId) => allPhotos[photoId];

        if (this.props.state.fetchPhotosHasError) {
            return <p className="photos-wrapper">Loading error!</p>
        }

        if (this.props.state.photosAreLoading) {
            return <p className="photos-wrapper">Photos are loading...</p>

        }

        if (albumId && albums[albumId] && albums[albumId].photos.length !== 0) {
            const photos = albums[albumId].photos;

            return <div className="photos-wrapper">
                <header className="app__header">
                    <h1>It's photos list</h1>
                    <h2>
                        {`Album is ${albumId}. Photo's count = ${photos.length}`}
                    </h2>
                </header>
                <Link className="back" to={`/albums`}>
                    Back
                </Link>
                <ul className="photos">
                    {photos.map(photoId => {
                        const photo = findPhoto(photoId);
                        if (!photo) {
                            return <li className='photo' key={photoId}>
                                {photoId}
                            </li>
                        }

                        return <li className='photo' key={photo.id}>
                            <a onClick={() => this.onPhotoClick(photo.id)}
                               className={`link${photo.id === this.props.state.selectedPhotoId ? ' active-link' : ''}`}
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

const mapStateToProps = (state) => ({
    state: state,
    albums: state.albums,
    albumId: state.selectedAlbumId,
    allPhotos: state.photos,
    albumsAreLoading: state.albumsAreLoading
});

const mapDispatchToProps = (dispatch) => ({
    loadAlbumPhotos: (albumId) => dispatch(loadAlbumPhotos(albumId)),
    onPhotoClick: (photoId) => dispatch(selectPhoto(photoId)),
    dispatch
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Album);