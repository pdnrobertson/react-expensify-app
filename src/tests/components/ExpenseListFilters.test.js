import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let wrapper, setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test('Should render ExpenseListFilters', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseListFilters with alt data', () => {
    wrapper.setProps({ 
        filters: altFilters
     })
    expect(wrapper).toMatchSnapshot();
});

test('Should handle text change', () => {
    const text = 'rent';
    wrapper.find('input').simulate('change', {
        target: { value: text }
    });
    expect(setTextFilter).toHaveBeenCalledWith(text);
});

test('Should sort by date', () => {
    wrapper.find('select').simulate('change', {
        target: { value: 'date' }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('Should sort by amount', () => {
    wrapper.find('select').simulate('change', {
        target: { value: 'amount' }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('Should handle date changes', () => {
    const startDate = moment(0);
    const endDate = moment(0).add(3, 'days');
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('Should handle date focus changes', () => {
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});