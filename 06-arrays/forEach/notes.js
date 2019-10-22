// There is no need for all the items to have the same type!
const notes = ['Note 1', 'Note 2', 'Note 3']

console.log(notes)

console.log(`We have ${notes.length} notes`)

notes.forEach(function(note, index) {
    console.log(`${index}. ${note}`)
})
