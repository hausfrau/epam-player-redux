import {selectAlbum, loadAlbumPhotos} from '../../actions';
import {connect} from 'react-redux';
import AlbumsLists from "../../components/AlbumsLists";

const mapStateToProps = (state) => ({
    albums: state.albums,
    albumsAreLoading: state.albumsAreLoading,
    fetchAlbumsHasError : state.fetchAlbumsHasError
});

const mapDispatchToProps = (dispatch) => ({
    // loadAlbums: () => dispatch(loadAlbums()),
    onAlbumClick: (id) => {
        console.log(`выбрали альбом = ${id}`);
        dispatch(selectAlbum(id));
        dispatch(loadAlbumPhotos(id));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AlbumsLists);