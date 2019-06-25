let num = 103.941

console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

console.log(Math.random())
let min = 10
let max = 20 
let randomNum = min + Math.floor(Math.random() * (max - min + 1))
console.log(randomNum)

// Challenge area
// Guess a number beteween 1 and 5 => Return true if guess is correct

let makeGuess = function (guess) {
    let min = 1
    let max = 5 
    let randomNum = min + Math.floor(Math.random() * (max - min + 1))
    console.log(`Your guess is ${guess} - ${randomNum} is my number.`)
    return randomNum === guess
}

console.log(makeGuess(2))