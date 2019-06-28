import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadTracks, loadAlbums} from "../../actions";
import {NavLink} from 'react-router-dom';
import './pagesNavigation.css';

class PagesNavigation extends Component {
    onPlayerButtonClick = () => {
        const {tracks, onPlayerButtonClick} = this.props;

        if (tracks.length === 0) {
            onPlayerButtonClick();
        }
    };

    onAlbumsButtonClick = () => {
        const {albums, onAlbumsButtonClick} = this.props;

        if (Object.keys(albums).length === 0) {
            onAlbumsButtonClick();
        }
    };

    render() {
        return (<nav>
            <ul className="navigation">
                <li className="navigation__item">
                    <NavLink className="navigation__link"
                             activeClassName="active-link"
                             to="/player">
                        <button className="navigation__button"
                                onClick={this.onPlayerButtonClick}>
                            Player
                        </button>
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink className="navigation__link"
                             activeClassName="active-link"
                             to="/albums">
                        <button className="navigation__button"
                                onClick={this.onAlbumsButtonClick}>
                            Albums
                        </button>
                    </NavLink>
                </li>
            </ul>
        </nav>);
    }
}

const mapStateToProps = state => ({
    tracks: state.player.tracks,
    albums: state.photoAlbum.albums
});

const mapDispatchToProps = dispatch => ({
    onPlayerButtonClick: () => dispatch(loadTracks()),
    onAlbumsButtonClick: () => dispatch(loadAlbums())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PagesNavigation);