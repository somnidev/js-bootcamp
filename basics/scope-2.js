// Global (name)
//   Local (name)
//     Local
//   Local
// Variable shadowing in javascript

let name = 'Andrew'
if (true) {
    let name = 'Mike'
    if (true) {
        name = 'Jen' 
        fullName = 'Andrew Mead' // leaked global if name is not declared using 'let'
        console.log(name)
    }    
}

if (true) {
    console.log(name)    
    console.log(fullName)
}