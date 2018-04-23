import React, { Component } from 'react';

import FirstComponent from './components/first-method.component';
import SecondComponent from './components/second-method.component';
import ThirdComponent from './components/third-method.component';
import FourthComponent from './components/fourth-method.component';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>Hello, React!</p>
                <FirstComponent />
                <SecondComponent />
                <ThirdComponent />
                <FourthComponent />
            </div>
        )
    }
}

export default App;
