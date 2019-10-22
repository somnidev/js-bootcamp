// Create an array with five todos
const todos = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise']

//  You have x todos
console.log(`You have ${todos.length} todos`)

// forEach...
todos.forEach(function(value, index) {
    console.log(`${index + 1}. ${value}`)
})
