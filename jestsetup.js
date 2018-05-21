import Adapter from 'enzyme-adapter-react-16';
import { shallow, render, mount } from 'enzyme';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });
global.shallow = shallow;
global.render = render;
global.mount = mount;

console.error = message => {
    throw new Error(message);
 };

