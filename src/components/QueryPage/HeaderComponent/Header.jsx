import React from 'react';

import SearchComponent from './SearchComponent/SearchContainer';
import Logo from '../LogoComponent/Logo';

import Style from './Header.style.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <div className="header__logo-wraper">
                    <Logo className="header__logo" />
                </div>
                <div className="header__search-wraper">
                    <SearchComponent setQueryParam={this.props.setQueryParam} setQueryValue={this.props.setQueryValue} getMovies={this.props.getMovies} className="header__search-component" />
                </div>
            </div>
        );
    }

}

export default Header;