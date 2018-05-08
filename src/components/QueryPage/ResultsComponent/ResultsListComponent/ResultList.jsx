import React from 'react';

import ListItem from './ListItemComponent/ResultListItem';

import Style from './ResultList.style.scss';

const ResultList = (props) => {
    if (props.data && props.data.length) {
        return (
            <div className="list">
                <div className="list__content">
                    {props.data.map((dataItem) => {
                        return <ListItem key={dataItem.id} data={dataItem} />
                    })}
                </div>
            </div>
        );
    } else {
        return (
            <div className="list">
                <h2 className="results__error">No results</h2>
            </div>
        );
    }
}

export default ResultList;