import React, { Component } from 'react';

import QueryPage from './components/QueryPage/QueryPage';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
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
