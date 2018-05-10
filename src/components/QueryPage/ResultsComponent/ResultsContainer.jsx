import React from 'react';

import ResultList from './ResultsListComponent/ResultList';
import ResultsFilters from './ResultsFiltersComponent/ResultsFilters';

import Style from './ResultsContainer.style.scss';

class ResultsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.data && this.props.data.length ? 'results' : 'results results--nodata'}>
                <div className="results__filter-container">
                    <ResultsFilters isData={this.props.data && this.props.data.length ? this.props.data.length : false} />
                </div>
                <div className="results__list-container">
                    <ResultList data={this.props.data} />
                </div>
            </div>
        );
    }
}

export default ResultsContainer;