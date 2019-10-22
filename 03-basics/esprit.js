// Rechnung
// ESPRIT Online Shop
// Iban: DE06300308800000234567
// Swift/ Bic: TUBDDEDD 

// Wichtig! Verwendungszweck: A400631931-E9904197 
// Auftragsdatum: 16.06.2019
// Verwendungszweck: A400631931-E9904197 - Auftragsdatum: 16.06.2019 - Simon Oser

let n069CC2K007 = 17.99 -3.60
let n069EE2K014 = 19.99 -4.0
let n059EE2K015 = 12.99 -2.6
let n059EE2K031 = 12.99 -2.6
let versand = 0.99

console.log(n069CC2K007.toFixed(2))
console.log(n069EE2K014.toFixed(2))
console.log(n059EE2K015.toFixed(2))
console.log(n059EE2K031.toFixed(2))

let sum = n069CC2K007 + n069EE2K014 + 2 * n059EE2K015 + 2 * n059EE2K031 + versand

console.log("------")
console.log(sum.toFixed(2))

console.log(new Date().toString())
