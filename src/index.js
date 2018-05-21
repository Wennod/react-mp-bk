import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import indexStyle from './index.scss';

import App from './App';

import MoviePage from './components/MoviePage/MoviePage';

render(
    <Router>
        <div>
            <Route path="/" component={App} />
            <Route path="/movie" component={MoviePage} />
        </div>
    </Router>,    
    document.getElementById('root')
);