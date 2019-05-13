import React from "react";
import './index.css';

// const TracksListItem = (props) => {
const TracksListItem = ({ track, onClick }) => {
    // const track = props.track;
    const {name, duration} = track;


    // function onTrackClick(_track) {
    //     props.setCurrentTrackFromTrackItem(_track.id);
    // }

    return (
        <li
            className="tracks-list-item"
            onClick={onClick}
        >
            {name} {duration}
        </li>
    )
}

export default TracksListItem;