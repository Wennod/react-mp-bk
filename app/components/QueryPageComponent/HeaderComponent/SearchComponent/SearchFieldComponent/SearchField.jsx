import React from 'react';

const SearchField = (props) => {
    return (
        <div>
            <label htmlFor="fieldId">FIND YOUR MOVIE</label>
            <input className="search-field" type="text" name="search" id="fieldId" />
        </div>
    );
}

export default SearchField;