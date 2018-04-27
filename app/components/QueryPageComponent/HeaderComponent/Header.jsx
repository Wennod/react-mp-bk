import React from 'react';

import SearchComponent from './SearchComponent/SearchContainer';
import Logo from './LogoComponent/Logo';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <Logo className="header__logo" />
                <SearchComponent getMovie={this.props.getMovies} className="header__search-component" />
            </div>
        );
    }

}

export default Header;