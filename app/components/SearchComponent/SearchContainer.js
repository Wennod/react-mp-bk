import React from 'react';

import SearchField from './SearchFieldComponent/SearchField';
import SearchButton from './SearchButtonComponent/SearchButton';
import SearchFilter from './SearchFilterComponent/SearchFilter';

class SearchComponentContainer extends React.Component {
    render() {
        return (
            <div>
                <SearchField />
                <div className="search-form__controlls">
                    <SearchFilter />
                    <SearchButton />
                </div>
            </div>
        );
    }
}

export default SearchComponentContainer;