import React from 'react';

const SearchField = (props) => {
    return (
        <div>
            <input className="search-field" type="text" name="search" id="fieldId" />
            <label htmlFor="fieldId">FIND YOUR MOVIE</label>
        </div>
    );
}

export default SearchField;