import React from 'react';
import ResultsContainer from './ResultsContainer';
import renderer from 'react-test-renderer';

describe('ResultsContainer snapshot', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(<ResultsContainer />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});