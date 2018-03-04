
export default (expenses) => {
    if (expenses.length > 0) {
        return expenses
            .map((expense) => expense.amount)
            .reduce((sum,value) => sum+value, 0)
    } else {
        return 0;
    }
}