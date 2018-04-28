import React, { Component } from 'react';

import QueryPage from './components/QueryPageComponent/QueryPage';
import ErrorBoundary from './components/ErrorBoundaryComponent/ErrorBoundary';
class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ErrorBoundary>
                <QueryPage />
            </ErrorBoundary>
        )
    }
}

export default App;
