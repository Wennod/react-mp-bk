import react from 'react';

const initialState = {
    queryResults: {},
    queryValue: '',
    queryParam: 'title'
};

export default function QueryPageReducer(state=initialState, action) {
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
            };
        }

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
    
        default:
            return state;
    }
}