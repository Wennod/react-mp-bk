import React from 'react';

const SearchFilter = (props) => {
    return (
        <div className="search-filter">
            <p className="search-filter__title">Search By</p>
            <input className="search-filter__toggler" type="radio" name="searchCriteria" id="title" value="TITLE" />
            <input className="search-filter__toggler" type="radio" name="searchCriteria" id="genre" value="GENRE" />
        </div>
    );
}

export default SearchFilter;