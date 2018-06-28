import React from 'react';

import styles from './ResultsFilter.style.scss';

const ResultsPane = (props) => {
    if (props.isData) {
        return (
            <div className="result-filter">
                <p className="result-filter__count">{props.isData} movies found</p>
                <div className="result-filter__controls">
                    <p className="result-filter__controls-title">Sort by</p>
                    <input onClick={() => props.sortData('release date')} type="button" value="release date"/>
                    <input onClick={() => props.sortData('rating')} type="button" value="rating"/>
                </div>
            </div>
        )
    } else {
        return (
            <div className="result-filter result-filter--nodata">
            </div>
        );
    }
}

export default ResultsPane;