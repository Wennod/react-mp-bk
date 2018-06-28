
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