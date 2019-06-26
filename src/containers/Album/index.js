import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadAlbumPhotos, loadAlbums} from '../../actions';
import {Link} from 'react-router-dom';
import './album.css';

class Album extends Component {
    albumId = this.props.match.params.albumId;

    componentDidMount() {
        let {albums, loadAlbumPhotos, loadAlbums} = this.props;

        if (Object.keys(albums).length === 0) {
            loadAlbums().then(() => loadAlbumPhotos(this.albumId));
        }

        if (albums[this.albumId] && albums[this.albumId].photos.length === 0) {
            loadAlbumPhotos(this.albumId);
        }
    }

    render() {
        const {state, albums, allPhotos} = this.props;
        const findPhoto = photoId => allPhotos[photoId];

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
    allPhotos: state.photos,
    albumsAreLoading: state.albumsAreLoading
});

const mapDispatchToProps = dispatch => ({
    loadAlbumPhotos: albumId => dispatch(loadAlbumPhotos(albumId)),
    loadAlbums: () => dispatch(loadAlbums())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Album);