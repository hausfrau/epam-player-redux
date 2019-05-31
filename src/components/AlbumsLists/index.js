import React, {Component} from 'react';
import {loadAlbums, fetchAlbumsSuccess} from '../../actions';
import fetch from "isomorphic-fetch";
import {Link} from 'react-router-dom';
import './albumsList.css';

export default class AlbumsLists extends Component {
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
            return <p>Loading error!</p>
        }

        if (this.props.albumsAreLoading) {
            return <p>Albums are loading...</p>

        }

        const albums = this.props.albums;
        return <div>{`Альбомы: count=${Object.keys(albums).length}`}
            <ul className="albums">
                {Object.keys(albums).map(albumId => (
                    <li className='album' key={albums[albumId].id}>
                        <img className="album__image" src="" width="100" height="100"/>
                        {/*id={albums[albumId].id} title={albums[albumId].title} photos={albums[albumId].photos.length}*/}
                        <Link to='/player'>{albums[albumId].title}</Link>
                    </li>
                ))}
            </ul>
            <button onClick={() => console.log('нажали')
                // || dispatch(fetchAlbums)
            }>Get Albums
            </button>
        </div>
    }

}