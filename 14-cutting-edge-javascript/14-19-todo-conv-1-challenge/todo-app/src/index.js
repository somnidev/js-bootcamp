import { setFilters } from './filters'
import { loadTodos, getTodos, createTodo, removeTodo, toggleTodo } from './todos'
import { renderTodos } from './views'

// Render initial todos
renderTodos()

// Set up search text handler
document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters({ searchText: e.target.value })
    renderTodos()
})
// Set up checkbox handler
document.querySelector('#hide-completed').addEventListener('change', (e) => {
    setFilters({ hideCompleted: e.target.checked })
    renderTodos()
})

// Set up form submission handler
document.querySelector('#new-todo').addEventListener('submit', (e) => {
    const text = e.target.elements.text.value.trim()
    e.preventDefault()

    if (text.length > 0) {
        createTodo(text)
        renderTodos()
        e.target.elements.text.value = ''
    }
})
// Bonus: Add a watcher for local storage
window.addEventListener('storage', (e) => {
    if (e.key === 'todos') {
        loadTodos()
        renderTodos()
    }
})