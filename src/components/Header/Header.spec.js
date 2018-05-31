import React from 'react';
import Header from './Header';

describe('Header snapshot', () => {
    it('should match snapshot', () => {
        const tree = mount(<Header />);
        expect(tree).toMatchSnapshot();
    });
});