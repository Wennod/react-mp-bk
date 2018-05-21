import React from 'react';
import ResultsFilters from './ResultsFilters';
import renderer from 'react-test-renderer';

const __data = {

};

describe('ResultsContainer snapshot', () => {
    it('should match snapshot1', () => {
        const tree = renderer
            .create(<ResultsFilters isData={10} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('ResultsContainer snapshot', () => {
    it('should match snapshot2', () => {
        const tree = renderer
            .create(<ResultsFilters isData={false} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});