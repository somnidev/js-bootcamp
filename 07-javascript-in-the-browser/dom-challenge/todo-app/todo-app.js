
let todos = document.querySelectorAll('p')

todos.forEach(function(todo) {
    if (todo.textContent.includes('the')) {
        console.log(todo.textContent);
        todo.remove()
    }
})