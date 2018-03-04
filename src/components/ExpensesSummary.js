import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export class ExpensesSummary extends React.Component {

    calculateExpensesTotal = () => {
        return expensesTotal(this.props.expenses)/100
    }

    render() {
        return (
            <div>
                <p>Expenses Total: {numeral(this.calculateExpensesTotal()).format('$0,0,00')}</p>
                <p>Number of Expenses: {this.props.expenses.length}</p>
            </div>
        )
    }
 }

const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);