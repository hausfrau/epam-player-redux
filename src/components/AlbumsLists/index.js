import React, {PureComponent} from 'react';
import {NavLink, Link} from 'react-router-dom';
import './albumsList.css';

export default class AlbumsLists extends PureComponent {
    componentDidMount() {
        const {albums, albumsAreLoading, loadAlbums} = this.props;

        if (Object.keys(albums).length === 0 && !albumsAreLoading) {
            loadAlbums();
        }
    }

    render() {
        const {fetchAlbumsHasError, albumsAreLoading, albums
            // , onAlbumClick
            // selectedAlbumId
        } = this.props;

        if (fetchAlbumsHasError) {
            return <p className="albums-wrapper">Loading error!</p>
        }

        if (albumsAreLoading) {
            return <p className="albums-wrapper">Albums are loading...</p>
        }

        return <div className="albums-wrapper">
            <header className="app__header">
                <h1>It's albums list</h1>
                <h2>
                    {`Count = ${Object.keys(albums).length}`}
                </h2>
            </header>
            <Link className="back" to="/" >
                Back
            </Link>
            <ul className="albums">
                {Object.keys(albums).map(albumId => (
                    <li className="album" key={albums[albumId].id}>
                    {/*<li onClick={() => onAlbumClick(albumId)} className="album" key={albums[albumId].id}>*/}
                        <NavLink
                            // className={`album__link link${albums[albumId].id === selectedAlbumId ? ' active-link' : ''}`}
                            className="album__link link"
                            //здесь изменить, взять из урла
                            activeClassName="active-link"
                            to={`/albums/${albumId}`}>
                            {/*<img className="album__image" src="" width="100" height="100" alt={albums[albumId].title}/>*/}
                            {albums[albumId].title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    }
}