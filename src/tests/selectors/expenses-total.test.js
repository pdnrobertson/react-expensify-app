import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import getExpensesTotal from '../../selectors/expenses-total';

test('Should return 0 if no expenses', () => {
    const total = getExpensesTotal([]);
    expect(total).toBe(0);
});

test('Should return sum of one expense only', () => {
    const expenseTotal = expenses[0].amount;
    const total = getExpensesTotal([expenses[0]]);
    expect(total).toBe(expenseTotal);
})

test('Should return sum of all expense amounts', () => {
    const expenseTotal = expenses[0].amount + expenses[1].amount + expenses[2].amount;
    const total = getExpensesTotal(expenses);
    expect(total).toBe(expenseTotal);
})

console.log(getExpensesTotal(expenses));