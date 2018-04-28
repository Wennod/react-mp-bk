import React from 'react';

const ResultsPane = (props) => {
    if (props.isData) {
        return (
            <div className="result-filter">
                <p className="result-filter__count">{props.isData}</p>
                <div className="result-filter__controls">
                    <p className="result-filter__controls-title">Sort by</p>
                    <input type="button" value="release date"/>
                    <input type="button" value="rating"/>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default ResultsPane;