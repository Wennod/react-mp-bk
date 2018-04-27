import React from 'react';

const SearchButton = (props) => {
    console.log(props)
    return (
        <input onClick={props.getMovies} className="search-button" type="submit" value="SEARCH"/>
    );
}

export default SearchButton;