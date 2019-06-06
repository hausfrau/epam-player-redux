import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom';
import './albumsList.css';

export default class AlbumsLists extends Component {
    onAlbumClick = this.props.onAlbumClick;

    componentDidMount() {
        if (Object.keys(this.props.albums).length === 0 && !this.props.albumsAreLoading) {
            this.props.loadAlbums();
        }
    }

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
            <Link className="back" to="/">
                Back
            </Link>
            <ul className="albums">
                {Object.keys(albums).map(albumId => (
                    <li onClick={() => this.onAlbumClick(albumId)} className="album" key={albums[albumId].id}>
                        <NavLink
                            className={`link${albums[albumId].id === this.props.selectedAlbumId ? ' active-link' : ''}`}
                            activeClassName="active-link"
                            to={`/albums/${albumId}`}>
                            <img className="album__image" src="" width="100" height="100" alt=""/>
                            {albums[albumId].title}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    }
}