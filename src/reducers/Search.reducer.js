const initialState = {
    queryResults: {},
    queryParam: 'title',
    queryValue: '',
    queryString: 'http://react-cdp-api.herokuapp.com/movies?search=&searchBy='
};

export default function SearchReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_MOVIES': {
            return {
                ...state,
                queryStatus: 'RECEIVING'
            };
        }

        case 'GET_MOVIES_SUCCESS': {
            return {
                ...state,
                queryStatus: 'RECEIVED',
                queryResults: action.payload
            };
        }

        case 'SET_QUERY_PARAM': {
            return {
                ...state,
                queryParam: action.payload
            };
        }

        case 'SET_QUERY_VALUE': {
            return {
                ...state,
                queryValue: action.payload
            };
        }

        case 'SET_QUERY_STRING': {
            return {
                ...state,
                queryString: action.payload
            };
        }

        case 'SORTING_EXECUTED': {
            return {
                ...state,
                queryResults: action.payload
            };
        }
    
        default:
            return state;
    }
}