import react from 'react';

const initialState = {
    queryParam: 'title',
    queryValue: '',
    queryString: 'http://react-cdp-api.herokuapp.com/movies?search=&searchBy='
};

export default function SearchReducer(state = initialState, action) {
    switch (action.type) {
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
            }
        }

        case 'SET_QUERY_STRING': {
            return {
                ...state,
                queryString: action.payload
            }
        }
    
        default:
            return state;
    }
}