import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as searchActions from '../../../actions/search.actions';
import SearchForm from './SearchFormComponent/SearchForm';

class SearchComponentContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SearchForm 
                setQueryParam={this.props.searchActions.queryParam}
                setQueryValue={this.props.searchActions.queryString}
                getMovies={this.props.searchActions.fetchMovies} 
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        search: state.search
    };
};

function mapDispatchToProps(dispatch) {
    return {
        searchActions: bindActionCreators(searchActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponentContainer);