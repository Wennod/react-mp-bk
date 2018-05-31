import React from 'react';
import SearchContainer from './SearchContainer';

describe('SearchContainer snapshot', () => {
    it('should match snapshot', () => {
        const tree = mount(<SearchContainer />);
        expect(tree).toMatchSnapshot();
    });
});