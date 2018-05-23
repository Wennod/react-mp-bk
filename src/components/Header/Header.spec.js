import React from 'react';
import Header from './Header';
import renderer from 'react-test-renderer';

describe('Header snapshot', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(<Header />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});