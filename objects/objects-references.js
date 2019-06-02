let myAccount = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0
}

let otherAccount = myAccount
otherAccount.income = 1000;

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
    // console.log(account)
}

addExpense(myAccount, 2.5)
console.log(myAccount)

otherAccount = {}
console.log(myAccount)

// Challenge Area
// addIncome
let addIncome = function (account, amount) {
    account.income += amount
}
// resetAccount
let resetAccount = function (account) {
    account.income = 0
    account.expenses = 0
}

// getAccountSummary
let getAccountSummary = function (account) {
    return `Account for ${account.name} has $${account.income - account.expenses}. $${account.income} in income. $${account.expenses} in expenses.`
}

addIncome(myAccount, 100)
addExpense(myAccount, 100)
addExpense(myAccount, 100)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
