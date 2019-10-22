let isAccountLocked = false
let userRole = 'admin'  // 'user' or 'admin'

if (isAccountLocked) {
    console.log('Account is locked!')
} else if (userRole === 'admin') {
    console.log('Welcome Admin')
} else {
    console.log('Welcome!')
}

// Challenge area
let temp = 50

// It is freezing outside!
// It is hot outside!
// Go for it! It is pretty nice outside!
if (temp <= 32) {
    console.log('It is freezing outside!')
} else if (temp >= 110) {
    console.log('It is hot outside!')
} else {
    console.log('Go for it! It is pretty nice outside!')
}
