import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadAlbumPhotos} from '../../actions';
import {Link, Route} from 'react-router-dom';
import './album.css';

class Album extends Component {

    componentDidMount() {
        const {albums, albumId, loadAlbumPhotos} = this.props;
        console.log(`componentDidMount album ${this.props.match.params.albumId}`);

        if (albums[albumId] && albums[albumId].photos.length === 0) {
            console.log(`фотки ${albumId} = ${albums[albumId].photos.length}`);
            loadAlbumPhotos(albumId);
        }
    }

    render() {

        const {match, albums, allPhotos} = this.props;
        // console.log(`parseInt(match.params.albumId) = ${parseInt(match.params.albumId)} match = ${match} albumId = ${albumId} albums.photos=${albums[albumId].photos.length}`);
        const albumId = match.params ? parseInt(match.params.albumId) : 0;

        const findPhoto = (photoId) => allPhotos[photoId];

        if (albumId && albums[albumId]) {
            const photos = albums[albumId].photos;
            console.log(`Album render albumId=${albumId} photos=${photos}`);

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
                        console.log(`нашли фото ${photo} все фотки=${Object.keys(allPhotos)}`);
                        if (!photo) {
                            return <li onClick={() => console.log(photoId)} className='photo' key={photoId}>
                                <Link to="/" target="_blank">{photoId}</Link>
                            </li>
                        }
                        // const photo = findPhoto(photoId);
                        // console.log(`нашли фото ${photo} все фотки=${Object.keys(allPhotos)}`);
                        return <li onClick={() => console.log(photoId)} className='photo' key={photo.id}>
                            <a className="link" href={photo.url} target="_blank">
                                <img className="photo__image" src={photo.url} width="100" height="100"/>
                                {photo.title}
                            </a>
                            {/*<Link to={photo.url} target="_blank">{photo.title}</Link>*/}
                        </li>
                    })}
                </ul>
            </div>
        }

        return (
            <div>
                Nothing
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    albums: state.albums,
    albumId: state.selectedAlbumId,
    allPhotos: state.photos
});

const mapDispatchToProps = (dispatch) => ({
    loadAlbumPhotos: (albumId) => dispatch(loadAlbumPhotos(albumId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Album);