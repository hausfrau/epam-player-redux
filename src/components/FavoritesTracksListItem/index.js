import React from "react";

export default ({track, onClick}) => {
    const {name, duration} = track;

    return (
        <li
            className="favorites-tracks-list-item"
            onClick={onClick}
        >
            {name} {duration}
        </li>
    )
}