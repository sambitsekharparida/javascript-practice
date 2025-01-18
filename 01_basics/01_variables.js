const accountNumber = 12345
var accountName = "Sambit"
let city = "Hyderabad"
country = "India" // not a best practice
let state; // if we don't assign any value, then JS considers it as undefined

/*
accountNumber = 2345 // not allowed
const indicates constants, so the value cann't be modified.

prefer not to use var
because of issue in block scope and functional scope
*/

accountName = "Sekhar"
city = "NewYork"
country = "US"

console.log([accountNumber, accountName, city, country, state])
console.table([accountNumber, accountName, city, country, state])