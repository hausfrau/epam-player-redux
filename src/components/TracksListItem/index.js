import React from 'react';
import './TracksListItem.css';
// import img from '../../images/yellow-star.png';

export default ({track, currentTrackId, onPlayButtonClick, onFavoriteButtonClick}) => {
    const {id, name, duration, isFavorite} = track;
    // console.log(`currentTrackId${currentTrackId} id${id} ${currentTrackId === id}`);

    return (
        <li
            className={ `Track${ 
                        (isFavorite && currentTrackId === id) ? 
                        ' Track__current-favorite' 
                        :
                        isFavorite ? 
                        ' Track__favorite' : 
                        currentTrackId === id ? 
                        ' Track__current' : ''                
                        }` 
                    }
        >
            {name} {duration}
            <button 
            className="Play-button"
            onClick={onPlayButtonClick}
            >
                <img className='Play-button__image' src={require("../../images/play.png")} width="24" height="24" alt="like"/> 
            </button>
            <button 
            className="Favorite-toggle-button"
            onClick={onFavoriteButtonClick}
            >
                {isFavorite ? 
                    <img className='Favorite-toggle-button__image' src={require("../../images/yellow-star.png")} width="24" height="24" alt="like"/> 
                    : 
                    <img className='Favorite-toggle-button__image' src={require("../../images/black-star.png")} width="24" height="24" alt="like"/>
                }
            </button>
        </li>
    )
}