const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
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

let filters = {
    searchText : ''
}

let renderTodos = function(todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(summary)
    filteredTodos.forEach(function (incompletedTodo) {
        const p = document.createElement('p')
        p.textContent = incompletedTodo.text
        document.querySelector('#todos').appendChild(p)
    })
}

renderTodos(todos, filters)

// Listen for new todo creation
document.querySelector('#add-todo').addEventListener('click', function (e) {
    console.log('Add a new todo...')
})

// Listen for todo text change
document.querySelector('#new-todo-text').addEventListener('input', function (e) {
    console.log(e.target.value)
})

// Filter todos
document.querySelector('#search-todos').addEventListener('input', function(e) {
    console.log(e.target.value)
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})