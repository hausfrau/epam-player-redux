import React from "react";
import './favoriteTracksListItem.css';

export default ({
                    track,
                    onClick,
                    playerFirstCurrentTrackId,
                    playerSecondCurrentTrackId,
                    onFirstPlayButtonClick,
                    onSecondPlayButtonClick,
                    onDeleteFavoriteButtonClick
                }) => {
    const {id, name, duration} = track;

    return (
        <li className={`track${
            (id === playerFirstCurrentTrackId || id === playerSecondCurrentTrackId) ?
                " track--current-favorite"
                :
                " track--favorite"
            }`}
            onClick={onClick}
        >
            <p className="track-content">
                {name} {duration}
            </p>
            <button
                className="button--play"
                onClick={onFirstPlayButtonClick}>
                <img className="button__image--play"
                     src={require("../../images/play.png")} width="24" height="24"
                     alt="play"/>
            </button>
            <button
                className="button--play"
                onClick={onSecondPlayButtonClick}>
                <img className="button__image--play"
                     src={require("../../images/play.png")} width="24" height="24"
                     alt="play"/>
            </button>
            <button
                className="button--favorite-delete"
                onClick={onDeleteFavoriteButtonClick}>
                <img className="button__image--favorite-delete"
                     src={require("../../images/delete.svg")} width="24"
                     height="24" alt="delete"/>
            </button>
        </li>
    )
}