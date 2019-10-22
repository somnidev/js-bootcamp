let myBook = {
    title: '1984',
    author: 'George Orwell',
    pages: 386
}

console.log(myBook)
console.log(myBook.author)
console.log(`${myBook.title} by ${myBook.author}`)  // template strings

myBook.title = 'Animal Farm'
console.log(`${myBook.title} by ${myBook.author}`)  // template strings

// Challenge area
// Person: name, age, location
// Andrew is 27 and lives in Philadelphia.
// Increase the age by one and print it again

let person = {
    name: 'Andrew',
    age: 27,
    location: 'Philadelphia'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}.` )

person.age += 1
console.log(`${person.name} is ${person.age} and lives in ${person.location}.` )
