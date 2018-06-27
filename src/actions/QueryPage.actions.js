function requestMovies() {
    return {
        type: 'GET_MOVIES'
    }
};

function receiveMovies(data) {
    return {
        type: 'GET_MOVIES_SUCCESS',
        payload: data
    }
}

function getQueryString(state) {
    let queryValue = state.queryValue.replace(/\s/g,'%20','');
    let queryParam = state.queryParam;
    return `http://react-cdp-api.herokuapp.com/movies?search=${queryValue}&searchBy=${queryParam}`;
}

export function fetchMovies(event) {
    event.preventDefault();
    return function(dispatch) {
        dispatch(requestMovies);
        return fetch(getQueryString(this.state))
            .then(result => result.json())
            .then(result => {
                dispatch(receiveMovies(result));
            },
            (err) => {
                throw new Error(err);
            }
        )
    }
}