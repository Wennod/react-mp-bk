import React from 'react';
import QueryPage from './QueryPage';
import fetch from 'isomorphic-fetch';

describe('QueryPage snapshot', () => {
    it('should match snapshot', () => {
        const tree = mount(<QueryPage />);
        expect(tree).toMatchSnapshot();
    });
});

describe('QueryPage test', () => {
    beforeEach(() => {
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve('value'));
    });
    
    it('should trigget fetch', () => {
        const tree = mount(<QueryPage />);
        const button = tree.find('.search-button');
        button.simulate('submit');
        expect(window.fetch).toBeCalled();
    });

    it('should change param to title', () => {
        const tree = mount(<QueryPage />);        
        const radio = tree.find('#title');
        radio.simulate('click');
        expect(tree.state().queryParam).toEqual('title');
    });

    it('should change param to genres', () => {
        const tree = mount(<QueryPage />);        
        const radio = tree.find('#genre');
        radio.simulate('click');
        expect(tree.state().queryParam).toEqual('genres');
    });

    it('should change search value', () => {
        const tree = mount(<QueryPage />);     
        const input = tree.find('.search-form__input');
        console.log(input);
    });
});