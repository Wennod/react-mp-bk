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

export function fetchMovies(event) {
    event.preventDefault();
    return (dispatch, getState) => {
        let queryString = getState().search.queryString;
        console.log(queryString);
        dispatch(requestMovies);
        return fetch(queryString)
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