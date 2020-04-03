const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })

    return puzzle
}

Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase()
    const guessExists = this.guessedLetters.includes(guess)
    const guessIsCorrect = this.word.includes(guess)
    if (!guessExists) {
        this.guessedLetters.push(guess)
        if (!guessIsCorrect) {
            this.remainingGuesses--;
        }
    }
}

Hangman.prototype.getRemainingGuesses = function() {
    return this.remainingGuesses
}
