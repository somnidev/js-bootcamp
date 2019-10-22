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

// 1. Convert array to an array of objects -> text, completed
// 2. Create function to remove a todo by text value


let deleteTodo = function (todos, text) {
    let index = todos.findIndex(function (todo, index) {
        return todo.text.toLowerCase() === text.toLowerCase()
    })
    if (index >= 0) {
        todos.splice(index, 1)
    }
}


deleteTodo(todos, 'buy  food')
console.log(todos)
