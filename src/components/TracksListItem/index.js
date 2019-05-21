import React from 'react';
import './tracksListItem.css';

export default ({track, currentTrackId, onPlayButtonClick, onFavoriteButtonClick}) => {
    const {id, name, duration, isFavorite} = track;

    return (
        <li
            className={`track${
                (isFavorite && currentTrackId === id) ?
                    " track--current-favorite"
                    :
                    isFavorite ?
                        " track--favorite" :
                        currentTrackId === id ?
                            " track--current" : ""
                }`
            }
        >
            {name} {duration}
            <button
                className="button--play"
                onClick={onPlayButtonClick}>
                <img className="button-image--play" src={require("../../images/play.png")} width="24" height="24"
                     alt="play"/>
            </button>
            <button
                className="button--favorite-toggle"
                onClick={onFavoriteButtonClick}>
                {isFavorite ?
                    <img className="button-image--favorite-toggle" src={require("../../images/yellow-star.png")}
                         width="24" height="24" alt="favorite"/>
                    :
                    <img className="button-image--favorite-toggle" src={require("../../images/black-star.png")}
                         width="24" height="24" alt="unfavorite"/>
                }
            </button>
        </li>
    )
}