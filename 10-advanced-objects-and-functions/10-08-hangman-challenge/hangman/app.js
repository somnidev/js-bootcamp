

const renderPuzzle = function(puzzle, remainingGuesses) {
    const puzzleElement = document.querySelector('#puzzle')
    const remainingGuessesElement = document.querySelector('#remaining-guesses')
    puzzleElement.innerHTML = puzzle
    remainingGuessesElement.innerHTML = remainingGuesses 
}

window.addEventListener('keypress', function(e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)

    console.log(`Guessing: ${guess}`)
    renderPuzzle(game1.getPuzzle(), game1.getRemainingGuesses())
})

const game1 = new Hangman('Cat', 50)
renderPuzzle(game1.getPuzzle(), game1.getRemainingGuesses())

