import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Table from './Table';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    onSearch: jest.fn(),
    companies: [
      {
        id: 1,
        name: 'Test Company',
        email: 'test@warrenpay.com',
        firstName: 'Omri',
        lastName: 'Mor',
        created: new Date(),
        type: 'customer',
        isRegistered: true,
      },
      {
        id: 2,
        name: 'Test Company 2',
        email: 'test@warrenpay.com',
        firstName: 'Omri',
        lastName: 'Mor',
        created: new Date(),
        type: 'vendor',
        isRegistered: false,
      },
    ],
  };

  const enzymeWrapper = mount(<Table {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('Table', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup();

    // make sure the summary above the table is correct
    expect(enzymeWrapper.find('div.sub.header').text()).toBe(
      'Showing 1-2 of 2',
    );

    // header and 1 row per company
    expect(enzymeWrapper.find('tr').length).toBe(3);

    // make sure we're showing the 'Customer' Tag for the first company
    expect(
      enzymeWrapper
        .find('div.ui.small.label')
        .first()
        .text(),
    ).toBe('Customer');

    // make sure we're showing the 'Vendor' Tag for the second company
    expect(
      enzymeWrapper
        .find('div.ui.small.label')
        .at(1)
        .text(),
    ).toBe('Vendor');

    // make sure we're showing the 'Unregistered' Tag for the second company
    expect(
      enzymeWrapper
        .find('div.ui.small.label')
        .at(2)
        .text(),
    ).toBe('Unregistered');
  });

  it('should call onSearch if the search input has the onChange event fired', () => {
    const { enzymeWrapper, props } = setup();
    enzymeWrapper.find('input').simulate('change');
    expect(props.onSearch.mock.calls.length).toBe(1);
  });
});
