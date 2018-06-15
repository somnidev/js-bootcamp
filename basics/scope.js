// Lexical scopte (static scope)
// Global scope
// Local scope
// In a scope you can access all variables in that scope and his parent/ancestor scope
let varOne = 'varOne'

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)
    if (true) {
        let varFour = 'varFour'
        console.log(varFour)
    }
}
if (true) {
    let varThree = 'varThree'
    console.log(varThree)
}
// our of scope:  console.log(varTwo)
