// Lexical scopte (static scope)
// Global scope
// Local scope
// In a scope you can access all variables in that scope and his parent/ancestor scope
let varOne = 'varOne'

let varFive = 'varFiveGlobal'
if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)
    if (true) {
        let varFour = 'varFour'
        console.log(varFour)
    }
    let varFive = 'varFiveLocal'
    console.log(varFive)
}
if (true) {
    let varThree = 'varThree'
    console.log(varThree)
}
console.log(varFive)
// our of scope:  console.log(varTwo)
