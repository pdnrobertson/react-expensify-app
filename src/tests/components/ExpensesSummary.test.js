import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('Should render ExpensesSummary correctly', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
})

test('Should render ExpensesSummary with multiply expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={23} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});