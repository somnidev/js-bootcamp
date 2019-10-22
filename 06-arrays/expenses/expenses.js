
let account = {
    name: 'Andrew Mead',
    expenses: [],

    addExpense: function(description, amount) {
        console.log(`Adding expense with ${description} amount ${amount}`)
        let expense = {
            description: description,
            amount: amount
        }
        this.expenses.push(expense)
    },

    expenseSummary: function() {
        console.log(this.expenses)
        let sum = 0
        this.expenses.forEach(function(expense) {
            sum += expense.amount
        })
        console.log(`${this.name} has a total of ${sum} expenses.`)

    }
}

// Expense -> description, amount
// addExpense -> description, amount
// expenseSummary -> gets the total amount for the account -> Andrew Mead has a total of $1250 in expenses.



account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.expenseSummary()

