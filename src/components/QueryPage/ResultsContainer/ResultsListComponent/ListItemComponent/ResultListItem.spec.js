import React from 'react';
import ResultList from './ResultListItem';

const __data = {
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
}

describe('ResultList', () => {
    it('should match snapshot', () => {
        const tree = mount(<ResultList data={__data} />);
        expect(tree).toMatchSnapshot();
    });
});