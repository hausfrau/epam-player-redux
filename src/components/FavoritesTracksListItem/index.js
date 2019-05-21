import React from "react";
import './FavoriteTracksListItem.css';

export default ({track, onPlayButtonClick, onDeleteFavoriteButtonClick}) => {
    const {name, duration} = track;

    return (
        <li
            className="track__favorite"
            // onClick={onClick}
        >
            {name} {duration}
            <button 
            className="play-button"
            onClick={onPlayButtonClick}
            >
                <img className='play-button__image' src={require("../../images/play.png")} width="24" height="24" alt="like"/>
            </button>
            <button 
            className="favorite-delete-button"
            onClick={onDeleteFavoriteButtonClick}
            >
                <img className='favorite-delete-button__image' src={require("../../images/delete.svg")} width="24" height="24" alt="delete"/>
            </button>
        </li>
    )
}