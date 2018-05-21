import React from 'react';
import Style from './ResultListItem.style.scss';

const ListItem = (props) => {
    return (
        <div className="movie-card">
            <img className="movie-card__image" src={props.data.poster_path} alt={`${props.data.title} poster`}/>
            <div className="movie-card__description">
                <p className="movie-card__title">{props.data.title}</p>
                <p className="year">{new Date(props.data.release_date).getFullYear()}</p>
            </div>
            <p className="movie-card__genre">{props.data.genres[0]}</p>
        </div>
    )
}

export default ListItem;