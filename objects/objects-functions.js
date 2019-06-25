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

// Challenge area - create a functíon, take fahrenheit and return all threee of f,k,c
let convertFahrenheit = function(fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * 5/9,
        celsius: (fahrenheit - 32) * 5 / 9
    }
}

let fahrenheitConverted = convertFahrenheit(32)
console.log(`${fahrenheitConverted.fahrenheit} Fahrenheit is ${fahrenheitConverted.kelvin} Kelvin or ${fahrenheitConverted.celsius} Celsius.`)
console.log(fahrenheitConverted)