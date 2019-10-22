// There is no need for all the items to have the same type!
const notes = ['Note 1', 'Note 2', 'Note 3']

console.log(notes)

// search for array on google : 'mdn array'
// length is a property, so we access it without parenthesis
console.log(notes.length)

// grab an individual item from the list via bracket notation
console.log(notes[0])
// if we access an index that does not exist, the result will be undefined
console.log(notes[22])
// grab the last item of the list
console.log(notes[notes.length - 1])

// Delete items in the middle
console.log(notes)
notes.splice(1, 1)
console.log(notes)
notes.splice(1, 0, 'New 2. Item')
console.log(notes)
notes.splice(1, 1, 'New second Item')
console.log(notes)
notes[1] = 'New second item'
console.log(notes)

// Manipulating Arrays with methods
console.log('Manipulating Arrays with methods')
console.log(notes.shift())
notes.unshift('New first note')
console.log(notes.pop())
notes.push('My new last note')
console.log(notes)

// For Loops...

for (let count = 0; count <= 2; count++) {
    console.log(count)
}

for (let count = 0; count < notes.length; count++) {
    console.log(notes[count])
}

// Searching Arrays
console.log(notes.indexOf('New second item'))