import React from 'react';
import ResultsContainer from './ResultsContainer';

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
    }
]

describe('ResultsContainer snapshot', () => {
    it('should match snapshot', () => {
        const tree = mount(<ResultsContainer />);
        expect(tree).toMatchSnapshot();
    });
});

describe('ResultsContainer', () => {
    it('should receive props', () => {
        const tree = mount(<ResultsContainer data={__data} />);
        expect(tree.props().data && tree.props().data.length).toBeTruthy();
    });

    it('should behave properly in case if no data received', () => {
        const tree = mount(<ResultsContainer data={__data} />);
        expect(tree.props().data && tree.props().data.length).toBeFalsy;
    });
});