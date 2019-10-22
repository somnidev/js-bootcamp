// arguments

let add = function(a, b, c) {
    return a + b + c;
}

let result = add(10, 1, 5)
console.log(result)

let getScoreText = function (name = 'Anonymous', score = 0) {
    return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText()
let scoreText2 = getScoreText('Andrew')
let scoreText3 = getScoreText(undefined, 99)
console.log(scoreText)
console.log(scoreText2)
console.log(scoreText3)

// Challenge area
// getTip (total, tipPercent)

let getTip = function (total, tipPercent = 0.2) {
    return total * tipPercent
}

let tip = getTip(100)
let tip2 = getTip(200, 0.3)
console.log(tip)
console.log(tip2)
