# JavaScript Bootcamp

## Install Node.js

Download the latest version from [https://nodejs.org/en/](https://nodejs.org/en/)

This package has installed:

- Node.js v12.3.1 to /usr/local/bin/node
- npm v6.9.0 to /usr/local/bin/npm

Make sure that /usr/local/bin is in your $PATH.

## Chapter 5 - JavaScript Objects

An _object_ allows us to store related pieces of information together in one single value.
For example a note consists of a _title_ and a _body_. Both of them are _strings_. Together we have a note as a whole.

### Objects basics

We can use objects to store related pieces of information in a single placs. This allows us to model things from the real world like books, cars, or people.
You can create a book like this - see _objects-101.js_:

```javascript
let myBook = {
    title: '1984',
    author: 'George Orwell',
    pages: 326
}
```

You can print `mybook` using 'console.log()`:

```javascript
console.log(myBook)
```

Or just one property:

```javascript
console.log(myBook.author)
```

Or using template strings:

```javascript
console.log(`${myBook.title} by ${myBook.author}`)  
```

### Using Objects with functions

We will figure out how we can pass objects to functions and how we can return objects from functions - see `objects-functions.js`.

```javascript
let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 386
}

let getSummary = function(book) {
    console.log(`${book.title} by ${book.author}`)
}

getSummary(myBook)
```

You can also return an object using the `return` statement:

```javascript
let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 386
}

let otherBook = {
    title: 'The Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function(book) {
    console.log(`${book.title} by ${book.author}`)
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    }
}

let myBookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)
console.log(myBookSummary.pageCountSummary)
```

The output is:

```text
1984 by George Orwell
The Peoples History by Howard Zinn
1984 is 386 pages long.
```

The challenge area:

```JavaScript
let convertFahrenheit = function(fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * 5/9,
        celsius: (fahrenheit - 32) * 5 / 9
    }
}

let fahrenheitConverted = convertFahrenheit(32)
console.log(`${fahrenheitConverted.fahrenheit} Fahrenheit is ${fahrenheitConverted.kelvin} Kelvin or ${fahrenheitConverted.celsius} Celsius.`)
```

### Object References

When we pass objects to functions, we can change the values of the original objects properties.

```JavaScript
let myAccount = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
    console.log(account)
}
console.log(myAccount)
addExpense(myAccount, 2.5)
console.log(myAccount)
```

The result is:

```text
{ name: 'Andrew Mead', expenses: 0 income: 0 }
{ name: 'Andrew Mead', expenses: 2.5, income: 0 }
{ name: 'Andrew Mead', expenses: 2.5, income: 0 }
```

But we can't assign a new object to it:

### Build an Expense Tracker

In this section you'll write an expense tracker:

```javascript
// Challenge Area
// addIncome
let addIncome = function (account, amount) {
    account.income += amount
}
// resetAccount
let resetAccount = function (account) {
    account.income = 0
    account.expenses = 0
}

// getAccountSummary
let getAccountSummary = function (account) {
    return `Account for ${account.name} has $${account.income - account.expenses}. $${account.income} in income. $${account.expenses} in expenses.`
}

addIncome(myAccount, 100)
addExpense(myAccount, 100)
addExpense(myAccount, 100)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
```

### Methods

We can add functions as property values of an object as well. These functions are called _methods_.
Methods can take some arguments, do some work and return a value as functions do. We can access them via the dot notation.

```javascript
let restaurant = {
    name: 'ADB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize) {
        let seatsAvailable = this.guestCapacity - this.guestCount
        return seatsAvailable >= partySize
    }
}

let status = restaurant.checkAvailability(5)
console.log('Check the availability: ' + status)
```

Our methods get access to the properties of an object via the `this`-keyword and the dot notation, e.g. `this.guestCapacity`.

### Exploring String Methods

You can get the length of the string via the _.len_-property of a string.

```javascript
let name = 'Andrew Mead'

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())
```

The documentatinon for these methods can be found if you search for _mdn string_ - mozilla developer network string - you'll find the following...
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

#### Check if one string includes another one - `str.includes()`

The `includes()` method determines whether one string may be found within another string, returning true or false as appropriate.

```javascript
str.includes(searchString[, position])
```

Parameters:

- `searchString` A string to be searched for within this string.
- `position` Optional - The position within the string at which to begin searching for searchString. (defaults to 0).
- `Return` - true if the search string is found anywhere within the given string; otherwise, false if not.

```javascript
var sentence = 'The quick brown fox jumps over the lazy dog.';
var word = 'fox';
console.log(`The word "${word}" ${sentence.includes(word)? 'is' : 'is not'} in the sentence`);
// expected output: "The word "fox" is in the sentence"
```

### Exploring Number Methods

We can search for _mdn number_ and go to [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

```javascript
let num = 103.941
console.log(num.toFixed(2))
```

The `toFixed()` method _Returns a string representing the number in fixed-point notation._

There is also a math object that allows us to do things with numbers.

- _Math is a built-in object that has properties and methods for mathematical constants and functions. Not a function object._
- See [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

There are a lot of math-based operations that live on that object.

```javascript
Math.random()
```

### Variables with const

Variables declared with _const_ cannot be reassigned. That means the program will fail.

```javascript
const isRaining = true
// isRaining = false
console.log(isRaining)
```

You can change attributes in objects declared by using _const_.  

```javascript
const person = {
    age: 27
}
person.age = 28
console.log(person)
```

### Variables with `var`

Attention `const` and `let`are _block scoped_, whereby `var` is _function scoped_.

```javascript
if (10 === 10) {
    let firstName = `Ben`
}
console.log(firstName)
```

You cannot access a variable that is defined with `let`outside the block.

```javascript
/Users/me/dev/src/javascript/js-bootcamp/objects/var.js:4
console.log(firstName)
            ^
ReferenceError: firstName is not defined
    at Object.<anonymous> (/Users/me/dev/src/javascript/js-bootcamp/objects/var.js:4:13)
    at Module._compile (internal/modules/cjs/loader.js:774:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:785:10)
    at Module.load (internal/modules/cjs/loader.js:641:32)
    at Function.Module._load (internal/modules/cjs/loader.js:556:12)
    at Function.Module.runMain (internal/modules/cjs/loader.js:837:10)
    at internal/main/run_main_module.js:17:11
```

There is some strange behaviour with _var_.

```javascript
console.log(age)
age = 10
console.log(age)
var age
```

Don´t use _var_!


## Chapter 6 - JavaScript Arrays

### Array Basics

```javascript
// Create an array with five todos
const todos = ['Todo 1', 'Todo 2', 'Todo 3', 'Todo 4', 'Todo 5']

//  You have x todos
console.log(`You have ${todos.length} todos`)

// Print first and second to last items -> Todo: walk the dog
console.log(`Todo: ${todos[0]}`)
console.log(`Todo: ${todos[todos.length - 2]}`)
```



### Manipulating arrays with methods


Add and remove an item at the end... 

```javascript
console.log(notes.shift())
notes.unshift('New first note')
```

Add or remove an item at the beginning

```javascript
console.log(notes.pop())
notes.push('My new last note')
```

Add and Delete items in the middle using `splice(index, number, newElement)`.

```javascript
console.log(notes)
notes.splice(1, 1)
console.log(notes)
notes.splice(1, 0, 'New 2. Item')
console.log(notes)
notes.splice(1, 1, 'New second Item')
console.log(notes)
notes[1] = 'New second item'
console.log(notes)
```

### Looping over Arrays

Iterate over all elements using `foreach`.

```javascript
todos.forEach(function(item, index, array) {
    console.log(`${index}. ${item}`);
});
```

When we pass a function to a function, we call this a _callback function_!

### The `for` Loop

With the `for` Loop we have a whole lot more flexibility! E.g. we can simply count from zero to two.

```javascript
// Counting...
for (let count = 0; count <= 2; count++) {
    console.log(count)
}
```

Or we can recreate the `forEach` Method.

```javascript
for (let count = 0; count < notes.length; count++) {
    console.log(notes[count])
}
```

### Searching Arrays

We decide that we want to find if a Note exists or locate it in the array.

```javascript
notes.indexOf('Note 2')
```

This method returns a number, a position in the array. If there is more than one item, it will get the first position. If there is no item, it will get negative one `-1` back.

If we have a list of objects we cannot use `indexOf()`.

```javascript
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
```

We can define our own search criteria for objects like this.

```javascript
let index = notes.findIndex(function (note, index) {
    console.log(note)
    return note.title === 'Habbits to work on'
})
```

The function we have defined is called a _predicate_.

There is an easy way to find an item instead of the index.

```javascript
function findNote (notes, nodeTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === nodeTitle.toLowerCase()
    })
}
```

The `find()` method allows us to find the element.

```javascript
let note = findNote(notes, 'office modifications')
console.log(note)
```

#### Filtering Arrays

What if we want to filter our list of items that match a specific criteria. We can use the `filter()` method which creates a new array with all elements that pass the criteria implemented by the provided function. If we return true, that means that the item should be kept in the new array, otherwise if we return false this item will be not part of the new array we are generating.

```javascript
let getThingsTodo = function (todos) {
    return todos.filter(function(todo) {
        return todo.completed === false
    })
}
console.log(getThingsTodo(todos))
```

#### Sorting Arrays

The `sort()` method sorts the elements of an array in place and returns the sorted array. 

```javascript
var months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]
```

The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

```javascript
var array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]
```

#### Sorting Arrays containing Objects

If compareFunction is supplied, all non-undefined array elements are sorted according to the return value of the compare function (all undefined elements are sorted to the end of the array, with no call to compareFunction)

```javascript
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
```

