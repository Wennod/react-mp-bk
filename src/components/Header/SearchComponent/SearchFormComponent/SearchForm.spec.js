import React from 'react';
import SearchForm from './SearchForm';

describe('SearchForm snapshot', () => {
    it('should match snapshot', () => {
        const tree = mount(<SearchForm />);
        expect(tree).toMatchSnapshot();
    });
});