import React from 'react';

import SearchForm from './SearchFormComponent/SearchForm';

class SearchComponentContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SearchForm 
                setQueryParam={this.props.setQueryParam} 
                setQueryValue={this.props.setQueryValue} 
                getMovies={this.props.getMovies} 
            />
        );
    }
}

export default SearchComponentContainer;