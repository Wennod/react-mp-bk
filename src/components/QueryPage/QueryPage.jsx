import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from '../Header/Header';
import ResultsContainer from './ResultsContainer/ResultsContainer';
import Footer from '../Footer/Footer';

import style from './QueryPage.style.scss';
import * as queryPageActions from '../../actions/QueryPage.actions';

class QueryPage extends React.Component {
    constructor(props) {
        super(props);
    }

    getMovies(event) {
        event.preventDefault();
        fetch(this.getQueryString())
            .then(result => result.json())
            .then((result) => {
                    this.setState(() => ({ queryResults: result }));
                },
                (err) => {
                    throw new Error(err);
                }
            );
    }

    render() {
        console.log(this.props);
        return (
            <div className="query-page">
                <Header getMovies={this.props.queryPageActions.fetchMovies} />
                <ResultsContainer />
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        queryPage: state.query,
        search: state.search
    };
};

function mapDispatchToProps(dispatch) {
    return {
        queryPageActions: bindActionCreators(queryPageActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(QueryPage)
