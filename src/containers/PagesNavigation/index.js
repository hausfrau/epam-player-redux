import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadTracks, loadAlbums, setPlayer, toggleFavorite} from "../../actions";
import {Link} from 'react-router-dom';
import './pagesNavigation.css';
// import {PLAYER_FIRST, PLAYER_SECOND, PLAYING_STATUS_PLAYING} from "../../constants";

/*class App extends React.Component {
  render () {
    return (*/

// const PagesNavigation = ({state, loadTracks, loadAlbums}) => {
class PagesNavigation extends Component {
    // onPlayerButtonClick = (tracks) => this.props.onPlayerButtonClick(tracks);
    onPlayerButtonClick = () => this.props.onPlayerButtonClick();
    // onAlbumsButtonClick = (albums) => {
    //     this.props.onAlbumsButtonClick(albums);
    //     console.log(`onAlbumsButtonClick length=${Object.keys(this.props.state.albums).length}`);
    // };

    onAlbumsButtonClick = () => {
        this.props.onAlbumsButtonClick();
        console.log(`onAlbumsButtonClick length=${Object.keys(this.props.state.albums).length}`);
    };

    // onPlayerButtonClick = () => {
    //     console.log('player');
    //     loadTracks(this.props.dispatch);
    //     console.log(`state.tracks=${this.props.state.tracks}`);
    // };
    //
    // onAlbumsButtonClick = () => {
    //     console.log('albums');
    //     console.log(`props = ${this.props.dispatch}`);
    //     this.props.dispatch(loadAlbums());
    //     console.log(`state.albums=${Object.keys(this.props.state.albums).length}`);
    // };

    render() {
        return (<nav>
                    <ul className="navigation">
                        <li>
                            <Link to="/player">
                                {/*<button onClick={() => this.onPlayerButtonClick(this.props.state.tracks)}>*/}
                                <button className="navigation__button" onClick={this.onPlayerButtonClick}>
                                    Player
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/albums">
                                {/*<button onClick={() => this.onAlbumsButtonClick(this.props.state.albums)}>*/}
                                <button className="navigation__button" onClick={this.onAlbumsButtonClick}>
                                    Albums
                                </button>
                            </Link>
                        </li>
                    </ul>
                </nav>);
    }
}

const mapStateToProps = state => ({
    state: state
});

const mapDispatchToProps = dispatch => ({
    // onPlayerButtonClick: (tracks) => dispatch(loadTracks(tracks)),
    // onAlbumsButtonClick: (albums) => dispatch(loadAlbums(albums))
    onPlayerButtonClick: () => console.log('from mapststetoprops on playerbtn click') || dispatch(loadTracks()),
    onAlbumsButtonClick: () => console.log('from mapststetoprops onAlbumsButtonClick') || dispatch(loadAlbums())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PagesNavigation);