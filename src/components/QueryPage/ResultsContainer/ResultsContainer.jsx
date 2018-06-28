import React from 'react';
import { connect } from 'react-redux';

import ResultList from './ResultsListComponent/ResultList';
import ResultsFilters from './ResultsFiltersComponent/ResultsFilters';

import Style from './ResultsContainer.style.scss';

class ResultsContainer extends React.Component {

    render() {
        let results = this.props.results.queryResults.data;

        return (
            <div 
                className={results && results.length 
                    ? 'results' 
                    : 'results results--nodata'
                }
            >
                <div className="results__filter-container">
                    <ResultsFilters 
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
        results: state.query
    }
}

export default connect(mapStateToProps)(ResultsContainer);
