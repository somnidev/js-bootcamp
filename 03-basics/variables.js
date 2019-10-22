// 1. You can't define a variable more than once
let petName = 'Andrew'
petName = "Santa's Little Helper"

// 2. Variables start with a character 'a-zA-Z' or '$' or' _'
let $1 = 1
let _name = 'Andrew'
let test_$ = 45

// 3. Variable names can't be reserved keywords

console.log(petName)
console.log($1)
console.log(_name)
console.log(test_$)