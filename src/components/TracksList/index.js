import React from 'react';
import TracksListItem from '../TracksListItem';
import './index.css';

const TracksList = ({tracks, onClick}) =>
    (<div>
            <p>The length of tracks is {tracks.length}</p>

            <ul className="tracks-list">
                {console.log(tracks) || tracks.map(track => (
                    <TracksListItem track={track} key={track.id}
                                    onClick={onClick}
                    />
                ))}
            </ul>
        </div>)


export default TracksList;