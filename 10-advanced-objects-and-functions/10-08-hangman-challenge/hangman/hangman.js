const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'playing'
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
        if (!guessIsCorrect ) {
            this.remainingGuesses--;
        }
    }
}

Hangman.prototype.recalculateStatus = function () {
    if (this.remainingGuesses < 1) {
        this.status = 'failed'
    } else {
        this.status = 'finished'
        this.word.forEach((letter) => {
            if (!this.guessedLetters.includes(letter)) {
                this.status = 'playing'
            }
        })
    }
}

Hangman.prototype.getRemainingGuesses = function() {
    return this.remainingGuesses
}