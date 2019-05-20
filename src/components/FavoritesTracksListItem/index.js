import React from "react";
import './FavoriteTracksListItem.css';

export default ({track, onPlayButtonClick, onDeleleFavoriteButtonClick}) => {
    const {name, duration} = track;

    return (
        <li
            className="Track__favorite"
            // onClick={onClick}
        >
            {name} {duration}
            <button 
            className="Play-button"
            onClick={onPlayButtonClick}
            >
                <img className='Play-button__image' src={require("../../images/play.png")} width="24" height="24" alt="like"/> 
            </button>
            <button 
            className="Favorite-delete-button"
            onClick={onDeleleFavoriteButtonClick}
            >
                <img className='Favorite-delete-button__image' src={require("../../images/delete.svg")} width="24" height="24" alt="delete"/>
            </button>
        </li>
    )
}