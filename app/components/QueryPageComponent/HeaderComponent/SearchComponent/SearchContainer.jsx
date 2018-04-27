import React from 'react';

import SearchField from './SearchFieldComponent/SearchField';
import SearchButton from './SearchButtonComponent/SearchButton';
import SearchFilter from './SearchFilterComponent/SearchFilter';

class SearchComponentContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <SearchField />
                <div className="search-form__controlls">
                    <SearchFilter />
                    <SearchButton getMovies={this.props.getMovie} />
                </div>
            </div>
        );
    }
}

export default SearchComponentContainer;