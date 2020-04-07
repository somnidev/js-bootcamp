

const renderPuzzle = function(word, puzzle, remainingGuesses, status) {
    const puzzleElement = document.querySelector('#puzzle')
    const remainingGuessesElement = document.querySelector('#remaining-guesses')
    const statusElement = document.querySelector('#status')
    puzzleElement.innerHTML = puzzle
    if (status === 'playing') {
        remainingGuessesElement.innerHTML = "Remaining guesses: " + remainingGuesses
    } else if (status === 'failed') {
        remainingGuessesElement.innerHTML = `Nice try! The word was "${word}"` 
    } else { // status === finished
        remainingGuessesElement.innerHTML = `Great work! You guessed the word!`        
    }
    statusElement.innerHTML = status
}

window.addEventListener('keypress', function(e) {
    const guess = String.fromCharCode(e.charCode)
    if (game1.status === 'playing') {
        game1.makeGuess(guess)
        console.log(`Guessing: ${guess}`)
    }
    game1.recalculateStatus()
    renderPuzzle(game1.word.join(''), game1.getPuzzle(), game1.getRemainingGuesses(), game1.status)
})

const game1 = new Hangman('Cat', 3)
// game1.recalculateStatus()
renderPuzzle(game1.word.join(''), game1.getPuzzle(), game1.getRemainingGuesses(), game1.status)

