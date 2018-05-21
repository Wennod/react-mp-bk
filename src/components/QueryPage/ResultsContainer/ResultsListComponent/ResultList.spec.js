import React from 'react';
import ResultList from './ResultList';
import renderer from 'react-test-renderer';

const __data = [
    {
        "id": 412302,
        "title": "Gemini",
        "tagline": "",
        "vote_average": 10,
        "vote_count": 3,
        "release_date": "2018-03-30",
        "poster_path": "https: //image.tmdb.org/t/p/w500/oIltQs7MPk7VQFG3DJfgC63mShU.jpg",
        "budget": 0,
        "revenue": 0,
        "genres":  ["Mystery","Thriller"],
        "runtime": 92
    },
    {
        "id": 412301,
        "title": "Gemini",
        "tagline": "",
        "vote_average": 10,
        "vote_count": 3,
        "release_date": "2018-03-30",
        "poster_path": "https: //image.tmdb.org/t/p/w500/oIltQs7MPk7VQFG3DJfgC63mShU.jpg",
        "budget": 0,
        "revenue": 0,
        "genres":  ["Mystery","Thriller"],
        "runtime": 92
    }
]

describe('ResultList snapshot test', () => {
    it('should match to prev snapshot', () => {
        const tree = renderer
            .create(<ResultList data={__data} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});