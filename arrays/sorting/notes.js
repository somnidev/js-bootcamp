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

let findNotes = function (notes, query) {
    return notes.filter(function(note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLocaleLowerCase())
        const isBodyMatch = note.body.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

const sortNotes = function (notes) {
    notes.sort(function(a, b) {
        if (a.title.toLocaleLowerCase() < b.title.toLocaleLowerCase()) {
            return -1
        } else if (b.title.toLocaleLowerCase() < a.title.toLocaleLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}
sortNotes(notes)
console.log(notes)
