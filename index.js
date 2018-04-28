import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

import App from './app/App';

render(
    <Router>
        <div>
            <Route path="/" component={App} />
            <Route path="/movie" component={App} />
        </div>
    </Router>,    
    document.getElementById('root')
);