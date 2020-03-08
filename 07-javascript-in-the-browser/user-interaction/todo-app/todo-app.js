
const todos = [{
    text: 'Order cat food',
    completed: true
}, {
    text: 'Clean kitchen',
    completed: false
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

// You have 2 todos left (p element)
// Add a p for each todo 
const incompletedTodos = todos.filter(function(todo) {
    return !todo.completed
})


const summary = document.createElement('h2')
summary.textContent = `You have ${incompletedTodos.length} todos left`

document.querySelector('body').appendChild(summary)

todos.forEach(function(todo) {
    console.log(todo.text)
    const todoElement = document.createElement('p')
    todoElement.textContent = todo.text
    document.querySelector('body').appendChild(todoElement)
})

document.querySelector('button').addEventListener('click', function(e) {
    console.log('Button clicked')
})