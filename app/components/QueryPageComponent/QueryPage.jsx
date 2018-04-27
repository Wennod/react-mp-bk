import React from 'react';
import ResultsContainer from './ResultsComponent/ResultsContainer';
import Header from './HeaderComponent/Header';

class QueryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            queryResults: {}
        };
    }

    getMovies(value, param) {
        fetch(`http://react-cdp-api.herokuapp.com/movies?search=${value}&searchBy=${param}`).then((result) => {
            return result.json();
        }).then((result) => {
            console.log(result);
            this.setState(() => {
                return { queryResults: result }; 
            });
        }, (err) => {
            console.log(err);
        });
    }
 
    render() {
        return (
            <div>
                <Header getMovies={this.getMovies.bind(this)} />
                <ResultsContainer />
            </div>
        );
    }
}

export default QueryPage;