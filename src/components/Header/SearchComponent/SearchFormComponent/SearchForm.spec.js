import React from 'react';
import SearchForm from './SearchForm';
import renderer from 'react-test-renderer';

describe('SearchForm snapshot', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(<SearchForm />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});