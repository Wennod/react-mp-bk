import React from 'react';

import ListItem from '../ResultsListItemComponent/ResultListItem';

const ResultList = (props) => {
    if (props.data && props.data.length) {
        return (
            <div className="results">
                {props.data.map((dataItem) => {
                    return <ListItem key={dataItem.id} data={dataItem} />
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