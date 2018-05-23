import React from 'react';

import Style from './SearchForm.style.scss';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form className="search-form" onSubmit={this.props.getMovies}>
                <h2>Find your movies</h2>
                <input 
                    onChange={() => this.props.setQueryValue(this.inputField)} 
                    ref={el => this.inputField = el}  
                    className="search-form__input" 
                    type="text" 
                    name="search" 
                    id="fieldId" 
                />
                <div className="search-form__group">
                    <div className="search-form__filter">
                        <p className="search-form__filter-title">Search By</p>
                        <input 
                            onClick={() => this.props.setQueryParam(this.titleRadio)} 
                            ref={el => this.titleRadio = el} 
                            className="search-form__filter-toggler search-form__filter-toggler--t" 
                            type="radio" 
                            name="searchCriteria" 
                            id="title" 
                            value="title" 
                            defaultChecked 
                        />
                        <input 
                            onClick={() => this.props.setQueryParam(this.genreRadio)}
                            ref={el => this.genreRadio = el} 
                            className="search-form__filter-toggler search-form__filter-toggler-g" 
                            type="radio" 
                            name="searchCriteria" 
                            id="genre" 
                            value="genres" 
                        />
                    </div>
                    <input className="search-button" type="submit" value="SEARCH"/>
                </div>
            </form>
        )
    }
}

export default SearchForm;