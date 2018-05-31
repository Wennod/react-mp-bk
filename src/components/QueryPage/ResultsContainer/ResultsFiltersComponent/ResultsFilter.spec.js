import React from 'react';
import ResultsFilters from './ResultsFilters';

describe('ResultsContainer snapshot', () => {
    it('should match snapshot1', () => {
        const tree = mount(<ResultsFilters />);
        expect(tree).toMatchSnapshot();
    });
});

describe('ResultsContainer snapshot', () => {
    it('should match snapshot2', () => {
        const tree = mount(<ResultsFilters isData={false} />);
        expect(tree).toMatchSnapshot();
    });
});