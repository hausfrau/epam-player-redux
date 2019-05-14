import React from "react";
import './TracksListItem.css';

export default ({track, onClick}) => {
    const {name, duration} = track;

    return (
        <li
            className="tracks-list-item"
            onClick={onClick}
        >
            {name} {duration}
        </li>
    )
}