// Undefined for variables...
let name
// name = 'Jen'

if (name === undefined) {
    console.log('Please provide a name')
} else {
    console.log(name)
}

// Undfined for function arguments
// Undefined as the function default return value
let square = function(num) {
    console.log(num)
}

let result = square()
console.log(result)

// Null as user assigned values
let age = 27
age = undefined
console.log(age)
age = null
console.log(age)