// There is no need for all the items to have the same type!
const notes = [{
    title: `My next trip`,
    body: `I would like to go to Spain`
},{
    title: `Habbits to work on`,
    body: `Exercises, Practise JavaScript`
},{
    title: `Office modifications`,
    body: `Get a new seat`
}]

let findNote = function (notes, nodeTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === nodeTitle.toLowerCase()
    })
}

// function findNote (notes, nodeTitle) {
//     let index = notes.findIndex(function (note, index) {
//         return note.title === nodeTitle
//     })
//     return notes[index]
// }

let note = findNote(notes, 'office modifications')
console.log(note)
