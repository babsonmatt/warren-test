import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Tag from './Tag';

Enzyme.configure({ adapter: new Adapter() });

function setup(props = {}) {
  const enzymeWrapper = mount(<Tag {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('Tag Component', () => {
  it('should render self with props.children', () => {
    const props = {
      children: 'test',
    };
    const { enzymeWrapper } = setup(props);

    expect(enzymeWrapper.find('div.ui.small.label').text()).toBe('test');
  });

  it('should merge props.style into base style prop', () => {
    const { enzymeWrapper } = setup({
      children: 'test',
    });

    const enzymeWrapper2 = setup({
      children: 'test',
      style: {
        backgroundColor: 'red',
        color: 'white',
      },
    });

    const enzymeWrapperWithStyle = enzymeWrapper2.enzymeWrapper;
    const baseStyle = enzymeWrapper.find('div.ui.small.label').props().style;

    expect(
      enzymeWrapperWithStyle.find('div.ui.small.label').props().style,
    ).toEqual({
      ...baseStyle,
      backgroundColor: 'red',
      color: 'white',
    });
  });
});
