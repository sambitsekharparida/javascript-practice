let score = "33"
let scoreToNumber = Number(score)
//console.log(scoreToNumber) //33
//console.log(typeof(scoreToNumber)) //number

let score1 = "33a"
let score1ToNumber = Number(score1)
//console.log(score1ToNumber) //NaN
//console.log(typeof(score1ToNumber)) //number

let score2 = null
let score2ToNumber = Number(score2)
//console.log(score2ToNumber) //0
//console.log(typeof score2ToNumber) //number

let score3 = undefined
let score3ToNumber = Number(score3)
//console.log(score3ToNumber) //NaN
//console.log(typeof score3ToNumber) //number

let score4 = true
let score4ToNumber = Number(score4)
//console.log(score4ToNumber) //1
//console.log(typeof score3ToNumber) //number

// "33" ==> 33
// "33a" ==> NaN
// true ==> 1; false ==> 0;

let isLoggedIn = 1
let isLoggedInToBoolean = Boolean(isLoggedIn)
//console.log(isLoggedInToBoolean) //true
//console.log(typeof isLoggedInToBoolean) //boolean

// 1 ==> true
// 0 ==> false
// "" ==> false
// "Sambit" ==> true


let data = 11
let dataToString = String(data)
console.log(dataToString) //11
console.log(typeof dataToString) //String
