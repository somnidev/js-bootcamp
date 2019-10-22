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

// Searching Arrays
let index = notes.findIndex(function (note, index) {
    console.log(note)
    return note.title === 'Habbits to work on'
})
console.log(index)