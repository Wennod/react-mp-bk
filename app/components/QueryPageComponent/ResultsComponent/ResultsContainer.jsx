import React from 'react';

import ResultsPane from './ResultsPaneComponent/ResultsPane';
import ResultList from './ResultsListComponent/ResultList';

class ResultsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="results">
                <ResultsPane />
                <ResultList />
            </div>
        );
    }
}

export default ResultsContainer;