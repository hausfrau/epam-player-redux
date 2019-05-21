import React from "react";
import './favoriteTracksListItem.css';

export default ({track, currentTrackId, onPlayButtonClick, onDeleteFavoriteButtonClick}) => {
    const {id, name, duration} = track;

    return (
        <li className={`track${
            (currentTrackId === id) ?
                " track--current-favorite"
                :
                " track--favorite"
            }`}
        >
            {name} {duration}
            <button
                className="button--play"
                onClick={onPlayButtonClick}>
                <img className="button__image--play" src={require("../../images/play.png")} width="24" height="24"
                     alt="play"/>
            </button>
            <button
                className="button--favorite-delete"
                onClick={onDeleteFavoriteButtonClick}>
                <img className="button__image--favorite-delete" src={require("../../images/delete.svg")} width="24"
                     height="24" alt="delete"/>
            </button>
        </li>
    )
}