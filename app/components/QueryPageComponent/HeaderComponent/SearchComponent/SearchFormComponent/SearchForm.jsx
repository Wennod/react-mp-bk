import React from 'react';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form onSubmit={this.props.getMovies}>
                <label htmlFor="fieldId">Find your movies</label>
                <input 
                    onChange={() => this.props.setQueryValue(this.inputField)} 
                    ref={el => this.inputField = el}  
                    className="search-field" 
                    type="text" 
                    name="search" 
                    id="fieldId" 
                />
                <div className="search-filter">
                    <p className="search-filter__title">Search By</p>
                    <input 
                        onClick={() => this.props.setQueryParam(this.titleRadio)} 
                        ref={el => this.titleRadio = el} 
                        className="search-filter__toggler" 
                        type="radio" 
                        name="searchCriteria" 
                        id="title" 
                        value="title" 
                        defaultChecked 
                    />
                    <input 
                        onClick={() => this.props.setQueryParam(this.genreRadio)}
                        ref={el => this.genreRadio = el} 
                        className="search-filter__toggler" 
                        type="radio" 
                        name="searchCriteria" 
                        id="genre" 
                        value="genres" 
                    />
                </div>
                <input className="search-button" type="submit" value="SEARCH"/>
            </form>
        )
    }
}

export default SearchForm;