import React from 'react';
import Footer from './Footer';
import renderer from 'react-test-renderer';

describe('Footer snapshot', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(<Footer />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});