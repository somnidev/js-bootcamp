const titleElement = document.querySelector('#note-title')
const updatedAtElement = document.querySelector('#note-updatedAt')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find(function (note) {
    return note.id === noteId
})

if (note === undefined) {
    location.assign('/index.html')
}

titleElement.value = note.title
updatedAtElement.innerHTML = "Laste edited " + moment(note.updatedAt).fromNow()
bodyElement.value = note.body

titleElement.addEventListener('input', function (e) {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    updatedAtElement.innerHTML = "Laste edited " + moment(note.updatedAt).fromNow()
    saveNotes(notes)
})

bodyElement.addEventListener('input', function (e) {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    updatedAtElement.innerHTML = "Laste edited " + moment(note.updatedAt).fromNow()
    saveNotes(notes)
})

removeElement.addEventListener('click', function (e) {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        note = notes.find(function (note) {
            return note.id === noteId
        })

        if (note === undefined) {
            location.assign('/index.html')
        }

        titleElement.value = note.title
        updatedAtElement.innerHTML = "Laste edited " + moment(note.updatedAt).fromNow()
        bodyElement.value = note.body
    }
})