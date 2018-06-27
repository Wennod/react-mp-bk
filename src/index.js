import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './reducers/store';
import indexStyle from './index.scss';

import App from './App';

render(
    <Provider store={store}>
        <App />
    </Provider>,    
    document.getElementById('root')
);