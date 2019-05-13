// import React, {Component} from 'react';
// import TracksList from '../../components/TracksList';
//
// class Tracks extends Component {
//   setCurrentTrackFromTrackList = (currentTrack) => this.props.setCurrentTrackFromTracks(currentTrack);
//
//   render() {
//     const tracks = this.props.tracks;
//     const length = tracks.length;
//     const setCurrentTrackFromTrackList = this.setCurrentTrackFromTrackList;
//
//     return (
//       <div>
//         The length of tracks is {length}
//         <TracksList list={tracks} setCurrentTrackFromTrackList={setCurrentTrackFromTrackList}/>
//       </div>
//     )
//   }
// }
//
// export default Tracks;

import {connect} from 'react-redux';
import TracksList from '../../components/TracksList';
import {setCurrentTrackId} from '../../actions';

const mapStateToProps = state => ({
    tracks: state.tracks
});

const mapDispatchToProps = dispatch => ({
    onClick: (id) => console.log('Нажали') || dispatch(setCurrentTrackId(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TracksList)