import React from 'react';

import Header from './HeaderComponent/Header';
import ResultsContainer from './ResultsComponent/ResultsContainer';
import Footer from './FooterComponent/Footer';

import style from './QueryPage.style.scss'

class QueryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            queryResults: {},
            queryValue: '',
            queryParam: 'title'
        };
    }

    getMovies(event) {
        event.preventDefault();
        fetch(`http://react-cdp-api.herokuapp.com/movies?search=${this.state.queryValue}&searchBy=${this.state.queryParam}`).then((result) => {
            return result.json();
        }).then((result) => {
            this.setState(() => {
                return { queryResults: result }; 
            });
        }, (err) => {
            throw new Error(err);
        });
    }

    setQueryValue(input) {
        this.setState(() => {
            return { queryValue: input.value };
        });
    }

    setQueryParam(radio) {
        this.setState(() => {
            return { queryParam: radio.value };
        });
    }

    render() {
        return (
            <div className="query-page">
                <Header setQueryValue={this.setQueryValue.bind(this)} getMovies={this.getMovies.bind(this)} setQueryParam={this.setQueryParam.bind(this)} />
                <ResultsContainer data={this.state.queryResults.data} />
                {/* <Footer /> */}
            </div>
        );
    }
}

export default QueryPage;