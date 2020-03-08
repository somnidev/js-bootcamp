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

document.querySelector('button').addEventListener('click', function(e) { 
    console.log(e) 
})

document.querySelector('search-text').addEventListener('input', function(e) {
    console.log(e.target.value)
})