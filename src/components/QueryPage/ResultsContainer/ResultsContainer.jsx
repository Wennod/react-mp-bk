import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../../actions/search.actions';
import ResultList from './ResultsListComponent/ResultList';
import ResultsFilters from './ResultsFiltersComponent/ResultsFilters';

import Style from './ResultsContainer.style.scss';

class ResultsContainer extends React.Component {

    render() {
        let results = this.props.results.queryResults;
        return (
            <div 
                className={results && results.length 
                    ? 'results' 
                    : 'results results--nodata'
                }
            >
                <div className="results__filter-container">
                    <ResultsFilters 
                        sortData={this.props.searchActions.sortResults}
                        isData={results && results.length 
                            ? results.length 
                            : false} 
                    />
                </div>
                <div className="results__list-container">
                    <ResultList data={results} />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        results: state.search
    };
};

function mapDispatchToProps(dispatch) {
    return {
        searchActions: bindActionCreators(actions, dispatch)
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ResultsContainer);
