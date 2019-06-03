import React, {Component} from 'react';
import {loadAlbums, loadAlbumPhotos, fetchAlbumsSuccess} from '../../actions';
import fetch from "isomorphic-fetch";
import {Link} from 'react-router-dom';
import './albumsList.css';

export default class AlbumsLists extends Component {
    onAlbumClick = this.props.onAlbumClick;
    // componentDidMount() {
    //     // fetch('https://jsonplaceholder.typicode.com/albums', {
    //     //     method: 'get',
    //     //     headers: {
    //     //         'Content-Type': 'application/json',
    //     //         'Accept': 'application/json'
    //     //     }
    //     // })
    //     //     .then(response => response.json())
    //     //     .then(json => console.log(json)
    //     //         // || this.setState({albums: (json)})
    //     //     );
    //     // this.props.loadAlbums();
    // }


    render() {
        if (this.props.fetchAlbumsHasError) {
            return <p className="albums-wrapper">Loading error!</p>
        }

        if (this.props.albumsAreLoading) {
            return <p className="albums-wrapper">Albums are loading...</p>

        }

        const albums = this.props.albums;
        return <div className="albums-wrapper">
            <header className="app__header">
                <h1>It's albums list</h1>
                <h2>
                    {`Count = ${Object.keys(albums).length}`}
                </h2>
            </header>
            <ul className="albums">
                {Object.keys(albums).map(albumId => (
                    <li onClick={() => this.onAlbumClick(albumId)} className='album' key={albums[albumId].id}>
                        <img className="album__image" src="" width="100" height="100"/>
                        {/*id={albums[albumId].id} title={albums[albumId].title} photos={albums[albumId].photos.length}*/}
                        <Link to={`/albums/${albumId}`}>{albums[albumId].title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    }

}