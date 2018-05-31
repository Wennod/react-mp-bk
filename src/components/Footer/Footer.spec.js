import React from 'react';
import Footer from './Footer';

describe('Footer snapshot', () => {
    it('should match snapshot', () => {
        const tree = mount(<Footer />);
        expect(tree).toMatchSnapshot();
    });
});