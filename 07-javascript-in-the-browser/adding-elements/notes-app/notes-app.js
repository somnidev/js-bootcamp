
// DOM - Document object model
// var p = document.querySelector('p')
// console.log(p)

var ps = document.querySelectorAll('p')
ps.forEach(function(p) {
    console.log(p.textContent)
    p.textContent = '*****'
    // p.remove()
})

// add new element
const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new paragraph'
document.querySelector('body').appendChild(newParagraph)
