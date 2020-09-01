import { v4 as uuidv4 } from 'uuid';

// Setup the empty todos array
let todos = []

// loadTodos
// Arguments: none
// Return value: none
// Fetch existing todos from localStorage
const loadTodos = () => {
    const todosJSON = localStorage.getItem('todos')

    try {
        todos = todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        todos = []
    }
}

// saveTodos
// Arguments: none
// Return value: none
// Save todos to localStorage
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// getTodos
// Arguments: none
// Return value: todos array
// Gets all todos
const getTodos = () => {
    return todos
}

// createTodo
// Arguments: todo text
// Return value: none
const createTodo = (todo) => {
    if (typeof todo === 'string') {
        todos.push({
            id: uuidv4(),
            text: todo,
            completed: false
        })
        saveTodos(todos)
    }
} 

// removeTodo
// Arguments: id of todo to remove
// Return value: none
const removeTodo = (id) => {
    if (typeof id === 'string') {
        todos = todos.filter((todo, index) => {
            return todo.id !== id
        })
        saveTodos()
    }
}

// toggleTodo
// Arguments: id of todo to toggle
// Return value: none
const toggleTodo = (id) => {
    if (typeof id === 'string') {
        const index = todos.findIndex((todo) => todo.id === id)
        if (index != -1) {
            todos[index].completed = !todos[index].completed
            saveTodos()
        }
    }
}

// Make sure to call loadTodos and setup the exports
loadTodos()
export { loadTodos, getTodos, createTodo, removeTodo, toggleTodo };
