
// Use the backtic '
let name = 'Jen';
let age = 26
console.log(`Hey, my name is ${name}! I am ${age} years old.`)

// Challenge area
// getTip (total, tipPercent)
// A 25% tip on 40$ would be 10$
let getTip = function (total, tipPercent = 0.2) {
    let tip = total * tipPercent
    let percent = 100 * tipPercent
    console.log(`A ${percent}% tip on ${total}$ would be ${tip}$.`)
    // console.log(`A ${100 * tipPercent}% tip on ${total}$ would be ${total * tipPercent}$.`)
    return total * tipPercent
}

let tip2 = getTip(40, 0.25)
