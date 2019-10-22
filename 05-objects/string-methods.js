let name = '  Andrew Mead  '

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Includes method
let password = 'abc123password098'
console.log(password.includes('password'))

// Trim method
console.log(name.trim())

// Challenge area
// isValidPassword - returns true if length is greater than 8 characters and doesn't contain the word 'password'
let isValidPassword = function(password) {
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('asfp'))
console.log(isValidPassword('asfp1234*'))
console.log(isValidPassword('asdw736pass99987password*'))
