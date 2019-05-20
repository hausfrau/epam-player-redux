import React from "react";
import './FavoriteTracksListItem.css';

export default ({track, onClick, onDeleleFavoriteButtonClick}) => {
    const {name, duration} = track;

    return (
        <li
            className="Track__favorite"
            onClick={onClick}
        >
            {name} {duration}
            <button 
            className="Favorite__delete-button"
            onClick={onDeleleFavoriteButtonClick}
            >
                <img className='Favorite__delete-button--image' src={require("../../images/delete.svg")} width="24" height="24" alt="delete"/>
            </button>
        </li>
    )
}