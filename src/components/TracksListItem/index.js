import React from 'react';
import './TracksListItem.css';
// import img from '../../images/yellow-star.png';

export default ({track, currentTrackId, onPlayButtonClick, onFavoriteButtonClick}) => {
    const {id, name, duration, isFavorite} = track;
    // console.log(`currentTrackId${currentTrackId} id${id} ${currentTrackId === id}`);

    return (
        <li
            className={`track${
                (isFavorite && currentTrackId === id) ?
                    " track__current-favorite"
                    :
                    isFavorite ?
                        " track__favorite" :
                        currentTrackId === id ?
                            " track__current" : ""
                }`
            }
        >
            {name} {duration}
            <button
                className="play-button"
                onClick={onPlayButtonClick}
            >
                <img className="play-button__image" src={require("../../images/play.png")} width="24" height="24"
                     alt="like"/>
            </button>
            <button
                className="favorite-toggle-button"
                onClick={onFavoriteButtonClick}
            >
                {isFavorite ?
                    <img className="favorite-toggle-button__image" src={require("../../images/yellow-star.png")}
                         width="24" height="24" alt="like"/>
                    :
                    <img className="favorite-toggle-button__image" src={require("../../images/black-star.png")}
                         width="24" height="24" alt="like"/>
                }
            </button>
        </li>
    )
}