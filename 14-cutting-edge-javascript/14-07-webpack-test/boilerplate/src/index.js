import { add } from './utilities'
import scream from './scream'

const name = 'Mike'
console.log(name)

class Hangman {
    myMethod() {
        return 'Testing'
    }
}
const hangman = new Hangman()
console.log(hangman.myMethod())

console.log('index.js')
console.log(add(32, 1))
console.log(scream('index.js'))
