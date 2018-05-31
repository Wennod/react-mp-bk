import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import indexStyle from './index.scss';

import App from './App';

render(
    <App />,    
    document.getElementById('root')
);