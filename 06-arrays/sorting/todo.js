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

let deleteTodo = function (todos, text) {
    let index = todos.findIndex(function (todo, index) {
        return todo.text.toLowerCase() === text.toLowerCase()
    })
    if (index >= 0) {
        todos.splice(index, 1)
    }
}

let getThingsTodo = function (todos) {
    return todos.filter(function(todo) {
        return todo.completed === false
    })
}

const sortTodos = function (todos) {
    todos.sort(function(a, b) {
        if (a.completed < b.completed) {
            return -1
        } else if (b.completed < a.completed ) {
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todos)

console.log(todos)
// console.log(getThingsTodo(todos))
// deleteTodo(todos, 'buy  food')
// console.log(todos)
