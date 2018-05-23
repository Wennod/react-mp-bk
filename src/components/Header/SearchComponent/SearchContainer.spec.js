import React from 'react';
import SearchContainer from './SearchContainer';
import renderer from 'react-test-renderer';

describe('SearchContainer snapshot', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(<SearchContainer />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});