import React from 'react';
import SearchContainer from './SearchComponent/SearchContainer';

class QueryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            queryResults: []
        }
    }

    render() {
        return (
            <SearchContainer />
        )
    }
}

export default QueryPage;