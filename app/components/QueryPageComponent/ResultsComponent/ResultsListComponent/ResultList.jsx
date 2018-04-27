import React from 'react';

import ListItem from '../ResultsListItemComponent/ResultListItem';

const ResultList = (props) => {
    let { queryResult } = props; 

    if (queryResult) {
        return (
            <div className="results">
                {queryResult.map((queryResultItem) => {
                    return <ListItem data={queryResultItem} />
                })}
            </div>
        );
    } else {
        return (
            <div className="results">
                <h2 className="results__error">No results</h2>
            </div>
        );
    }
}

export default ResultList;