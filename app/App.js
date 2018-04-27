import React, { Component } from 'react';

import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import ThirdComponent from './components/ThirdComponent';
import FourthComponent from './components/FourthComponent';

import SearchContainer from './components/SearchComponent/SearchContainer';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>Hello, React!</p>
                <SearchContainer />
                <FirstComponent />
                <SecondComponent />
                <ThirdComponent />
                <FourthComponent />
            </div>
        )
    }
}

export default App;
