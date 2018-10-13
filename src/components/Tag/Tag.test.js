import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Tag from './Tag';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    children: 'test',
    style: {
      backgroundColor: 'red',
      color: 'white',
    },
  };

  const enzymeWrapper = mount(<Tag {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('Tag Component', () => {
  it('should render self with props.children', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find('div.ui.small.label').text()).toBe('test');
  });

  it('should merge props.style into base style prop', () => {
    const { enzymeWrapper } = setup();

    const baseStyle = {
      borderRadius: 15,
      fontWeight: 'bold',
    };

    expect(enzymeWrapper.find('div.ui.small.label').props().style).toEqual({
      ...baseStyle,
      backgroundColor: 'red',
      color: 'white',
    });
  });
});
