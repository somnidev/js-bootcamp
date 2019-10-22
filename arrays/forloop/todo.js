// Create an array with five todos
const todos = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise']

//  You have x todos
console.log(`You have ${todos.length} todos`)

// Print first and second to last items -> Todo: walk the dog
console.log(`Todo: ${todos[0]}`)
console.log(`Todo: ${todos[todos.length - 2]}`)

// todos.forEach(function(item, index, array) {
//     console.log(`Todo Number ${index}: ${item}`);
// });

console.log(todos)

// Delete the 3rd item
todos.splice(3 - 1, 1)
console.log(todos)

// Add new element to the end
todos.push('Buy some coffee')
console.log(todos)

// Remove the first item from the list
todos.shift()
console.log(todos)

// forEach...
todos.forEach(function(value, index) {
    console.log(`${index + 1}. ${value}`)
})

// For Loops...
for (let index = 0; index < todos.length; index++) {
    console.log(`${index + 1}. ${todos[index]}`)
}