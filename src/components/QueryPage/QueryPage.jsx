import React from 'react';
// import fetch from 'isomorphic-fetch';

import Header from '../Header/Header';
import ResultsContainer from './ResultsContainer/ResultsContainer';
import Footer from '../Footer/Footer';

import style from './QueryPage.style.scss';

class QueryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            queryResults: {},
            queryValue: '',
            queryParam: 'title',
        };
    }

    getQueryString() {
        let queryValue = this.state.queryValue.replace(/\s/g,'%20','');
        let queryParam = this.state.queryParam;
        return `http://react-cdp-api.herokuapp.com/movies?search=${queryValue}&searchBy=${queryParam}`;
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

    setQueryValue(input) {
        this.setState(() => ({ queryValue: input.value }));
    }

    setQueryParam(radio) {
        this.setState(() => ({ queryParam: radio.value }));
    }

    render() {
        return (
            <div className="query-page">
                <Header
                    setQueryValue={this.setQueryValue.bind(this)}
                    getMovies={this.getMovies.bind(this)}
                    setQueryParam={this.setQueryParam.bind(this)}
                />
                <ResultsContainer data={this.state.queryResults.data} />
                <Footer />
            </div>
        );
    }
}

export default QueryPage;
