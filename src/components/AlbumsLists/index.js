import React, {PureComponent} from 'react';
import {NavLink, Link} from 'react-router-dom';
import './albumsList.css';

export default class AlbumsLists extends PureComponent {
    componentDidMount() {
        const {albums, fetchAlbumsLoading, loadAlbums} = this.props;

        if (Object.keys(albums).length === 0 && !fetchAlbumsLoading) {
            loadAlbums();
        }
    }

    renderLoading() {
        return <p className="albums-wrapper">Albums are loading...</p>
    }

    renderError() {
        return <p className="albums-wrapper">Albums loading error!</p>
    }

    render() {
        const {fetchAlbumsError, fetchAlbumsLoading, albums} = this.props;

        if (fetchAlbumsError) {
            return this.renderError();
        }

        if (fetchAlbumsLoading) {
            return this.renderLoading();
        }

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
                    <li className="album" key={albumId}>
                        <NavLink
                            className="album__link link"
                            activeClassName="active-link"
                            to={`/albums/${albumId}`}>
                            {albums[albumId].title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    }
}