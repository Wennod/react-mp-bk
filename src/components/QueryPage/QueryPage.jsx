import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from '../Header/Header';
import ResultsContainer from './ResultsContainer/ResultsContainer';
import Footer from '../Footer/Footer';

import style from './QueryPage.style.scss';

class QueryPage extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="query-page">
                <Header />
                <ResultsContainer />
                <Footer />
            </div>
        );
    }
}

export default QueryPage;
