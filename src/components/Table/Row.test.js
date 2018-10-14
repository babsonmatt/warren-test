import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Row from './Row';

Enzyme.configure({ adapter: new Adapter() });

function setup(props = {}) {
  const enzymeWrapper = mount(
    <table>
      <tbody>
        <Row {...props} />
      </tbody>
    </table>,
  );

  return enzymeWrapper;
}

describe('Row Component', () => {
  it('should render self', () => {
    const enzymeWrapper = setup({
      company: {
        id: 1,
        name: 'Test Company',
        email: 'test@warrenpay.com',
        firstName: 'Omri',
        lastName: 'Mor',
        created: new Date(),
        type: 'customer',
        isRegistered: true,
      },
    });

    // row per company
    expect(enzymeWrapper.find('tr').length).toBe(1);

    // 4 tds per row
    expect(enzymeWrapper.find('tr td').length).toBe(4);
  });

  it('should render appropriate Tags', () => {
    const enzymeWrapper = setup({
      company: {
        id: 1,
        name: 'Test Company',
        email: 'test@warrenpay.com',
        firstName: 'Omri',
        lastName: 'Mor',
        created: new Date(),
        type: 'customer',
        isRegistered: true,
      },
    });

    // make sure we're showing the 'Customer' Tag for the first company
    expect(
      enzymeWrapper
        .find('div.ui.small.label')
        .first()
        .text(),
    ).toBe('Customer');

    const enzymeWrapper2 = setup({
      company: {
        id: 1,
        name: 'Test Company',
        email: 'test@warrenpay.com',
        firstName: 'Omri',
        lastName: 'Mor',
        created: new Date(),
        type: 'vendor',
        isRegistered: false,
      },
    });

    // make sure we're showing the 'Vendor' Tag for the second company
    expect(
      enzymeWrapper2
        .find('div.ui.small.label')
        .at(0)
        .text(),
    ).toBe('Vendor');

    // make sure we're showing the 'Unregistered' Tag for the second company
    expect(
      enzymeWrapper2
        .find('div.ui.small.label')
        .at(1)
        .text(),
    ).toBe('Unregistered');
  });
});
