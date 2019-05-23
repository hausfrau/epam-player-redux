import React from 'react';
import './tracksListItem.css';

export default ({
                    track,
                    playerFirstCurrentTrackId,
                    playerSecondCurrentTrackId,
                    onClick,
                    onFirstPlayButtonClick,
                    onSecondPlayButtonClick,
                    onFavoriteButtonClick
                }) => {
    const {id, name, duration, isFavorite} = track;

    return (
        <li
            className={`track${
                (isFavorite && (id === playerFirstCurrentTrackId || id === playerSecondCurrentTrackId)) ?
                    " track--current-favorite"
                    :
                    isFavorite ?
                        " track--favorite" :
                        (id === playerFirstCurrentTrackId || id === playerSecondCurrentTrackId) ?
                            " track--current"
                            :
                            ""
                }`
            }
            onClick={onClick}
        >
            <p className="track-content">
                {name} {duration}
            </p>
            <button
                className="button--play"
                onClick={onFirstPlayButtonClick}>
                <img className="button-image--play" src={require("../../images/play.png")} width="24" height="24"
                     alt="play"/>
            </button>
            <button
                className="button--play"
                onClick={onSecondPlayButtonClick}>
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