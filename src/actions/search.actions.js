
function buildQueryString(queryValue, queryParam) {
    let qString = queryValue.replace(/\s/g,'%20','');
    return `http://react-cdp-api.herokuapp.com/movies?search=${qString}&searchBy=${queryParam}`;
}

function setQueryString(data) {
    return {
        type: 'SET_QUERY_STRING',
        payload: data
    };
};

function setQueryValue(data) {
    return {
        type: 'SET_QUERY_VALUE',
        payload: data
    };
};

function setQueryParam(data) {
    return {
        type: 'SET_QUERY_PARAM',
        payload: data
    };
};

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

function setSortedResults(data) {
    return {
        type: 'SORTING_EXECUTED',
        payload: data
    }
}

function sortMovies(results, type) {
    let sortedResults = [];
    if (type === 'rating') {
        sortedResults = results.sort((fItem, nItem) => {
            return nItem.vote_average - fItem.vote_average;
        });
    } else {
        sortedResults = results.sort((fItem, nItem) => {
            return new Date(nItem.release_date) - new Date(fItem.release_date);
        });
    }
    return sortedResults;
}

export function sortResults(type) {
    return (dispatch, getState) => {
        let results = getState().search.queryResults;
        let sortedResult = sortMovies(results, type);
        dispatch(setSortedResults(sortedResult));
    }
}

export function fetchMovies(event) {
    event.preventDefault();
    return (dispatch, getState) => {
        let queryString = getState().search.queryString;
        dispatch(requestMovies);
        return fetch(queryString)
            .then(result => result.json())
            .then(result => {
                let sortedResult = sortMovies(result.data, 'release date');
                dispatch(receiveMovies(sortedResult));
            },
            (err) => {
                throw new Error(err);
            }
        )
    }
}

export function queryString(value) {
    return (dispatch, getState) => {
        let param = getState().search.queryParam;        
        let qString = buildQueryString(value, param);
        dispatch(setQueryValue(value));
        dispatch(setQueryString(qString));
    };
};

export function queryParam(param) {
    return (dispatch, getState) => {
        let value = getState().search.queryValue;
        let qString = buildQueryString(value, param);
        dispatch(setQueryParam(param));
        dispatch(setQueryString(qString));
    };
};