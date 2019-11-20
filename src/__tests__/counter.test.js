import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Counter from '../components/counter/counter';

Enzyme.configure({adapter: new Adapter()});

describe ('Testing our Counter component', () => {
  it ('Up counter increases counter', () => {
    let app = mount (<Counter/>);
    let upClick = app.find('.up');
    expect(upClick).toBeDefined();
    expect(app.state('count')).toBe(0);
    upClick.simulate('click');
    expect(app.state('count')).toBe(1);
  })

  it ('Down counter decreases counter', () => {
    let app = mount (<Counter/>);
    let downClick = app.find('.down');
    expect(downClick).toBeDefined();
    expect(app.state('count')).toBe(0);
    downClick.simulate('click');
    expect(app.state('count')).toBe(-1);
  })



  it('render correctly', () => {
    const renderTree = renderer.create(<Counter/>).toJSON();
    expect (renderTree).toMatchSnapshot();
  })
})


