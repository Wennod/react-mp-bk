import React from 'react';

const ListItem = (props) => {
    return (
        <div className="movieCard">
            <img src={props.data.poster_path} alt={`${props.data.title} poster`}/>
            <div className="movieCard__description">
                <p className="movieCard__title">{props.data.title}</p>
                <p className="year">{new Date(props.data.release_date).getFullYear()}</p>
            </div>
            <p className="movieCard__genre">{props.data.genres[0]}</p>
        </div>
    )
}

export default ListItem;