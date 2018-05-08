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
            <div className="results">
                <ResultsFilters isData={this.props.data && this.props.data.length ? this.props.data.length : false} />
                <ResultList data={this.props.data} />
            </div>
        );
    }
}

export default ResultsContainer;