import React, { Component } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';


class MoviePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <Footer />
            </React.Fragment>
        )
    }

}

export default MoviePage;