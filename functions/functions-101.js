// Funciton - input (argument), code, output (return value)

let greetUser = function() {
    console.log('Welcome user!')
}

greetUser()

let square = function(num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)

// Challenge area

// convertFahrenheitToCelsius
let convertFahrenheitToCelsius = function(fahrenheit) {
    // convert fahrenheit to celsius and print it out
    let celsius = (fahrenheit - 32) * 5 / 9 
    return celsius
}
// Call a couple of times (32 -> 0) (68 -> 20)
let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68)

// Print out value
console.log(tempOne)
console.log(tempTwo)
