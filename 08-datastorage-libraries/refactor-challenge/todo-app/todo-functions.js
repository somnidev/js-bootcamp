
// Gets todos saved in local storage
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')
    let todos = []
    if (todosJSON !== null) {
        todos = JSON.parse(todosJSON)
    } 
    return todos
}

// Save todos to local storage
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Render application todos 
const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''

    const summary = generateSummaryDOM(incompleteTodos)
    document.querySelector('#todos').appendChild(summary)

    filteredTodos.forEach(function (todo) {
        const p = generateTodoDOM(todo)
        document.querySelector('#todos').appendChild(p)
    })
}

// Generate the DOM for a single todo
let generateTodoDOM = function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    return p
}

// Generate the DOM for the summary
let generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}