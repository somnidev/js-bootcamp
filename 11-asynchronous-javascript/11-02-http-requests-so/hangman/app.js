const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('Car Parts', 2)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
})

// const request = new XMLHttpRequest()
// request.addEventListener("readystatechange", (e) => {
//     const DONE = 4;
//     if (e.target.readyState === DONE) {
//         const data = JSON.parse(e.target.responseText)
//         console.log(data)
//     }
// })
// request.open("GET", "http://puzzle.mead.io/puzzle")
// request.send()

// const isocode = 'DE'
// const request = new XMLHttpRequest()
// request.addEventListener('load', (e) => {
//     if (e.target.status === 200) {
//         const countries = JSON.parse(e.target.responseText)
//         const country = countries.find( c => c.alpha2Code === isocode )
//         console.log(`${country.alpha2Code} ${country.name} `)
//     }

// })
// request.open('GET', 'http://restcountries.eu/rest/v2/all')
// request.send()


const getCountryDetails = (countryCode, callback) => {
    const request = new XMLHttpRequest()
    request.addEventListener('load', (e) => {
        if (e.target.status === 200) {
            const countries = JSON.parse(e.target.responseText)
            const country = countries.find( c => c.alpha2Code === countryCode )
            callback(country.name, undefined)
        } else {
            callback(undefined, 'An error occured')
        }

    })
    request.open('GET', 'http://restcountries.eu/rest/v2/all')
    request.send()
}

const countryCode = 'US'
getCountryDetails(countryCode, (countryName, error) => {
    if (countryName !== undefined) {
        console.log(`CountryDetails for "${countryCode}": ${countryName}`)
    } else {
        console.log(error)
    }
    
})

