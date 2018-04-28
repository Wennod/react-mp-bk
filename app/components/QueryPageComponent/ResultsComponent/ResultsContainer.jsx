import React from 'react';

import ResultList from './ResultsListComponent/ResultList';
import ResultsFilers from './ResultsFiltersComponent/ResultsFilters';

class ResultsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="results">
                <ResultsFilers isData={this.props.data && this.props.data.length ? this.props.data.length : false} />
                <ResultList data={this.props.data} />
            </div>
        );
    }
}

export default ResultsContainer;