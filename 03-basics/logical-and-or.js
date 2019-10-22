let temp = 130;

// Logical operator
if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice outside!')
} else if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside!')
} else {
    console.log('Do what you want!')
}

// Challenge area
let isGuestOneVegan = true
let isGuestTwoVegan = false

// Are both vegan? Only offer up vegan dishes!
// At least one vegan? Make sure to offer some vegan options! 
// Otherwise, offer up anything on the menu!
if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only offer up vegan dishes!')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Make sure to offer some vegan options!')
} else {
    console.log('Offer up anything on the menu!')
}

