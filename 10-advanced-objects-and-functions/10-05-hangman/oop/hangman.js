'use strict'

const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.guessed = ['a', 'e']
    this.remainingGuesses = remainingGuesses
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''
    this.word.forEach(element => this.guessed.includes(element) || element === ' ' ? puzzle += element : puzzle += '*' );
    return puzzle
}

const game1 = new Hangman('Cat', 2)
console.log(game1)
console.log(game1.getPuzzle())

const game2 = new Hangman('New Jersey', 4)
console.log(game2)
console.log(game2.getPuzzle())