var validator = require('validator');
const getNotes = require('./notes.js')
const msg = getNotes()
console.log(msg)


console.log(validator.isEmail('11@qq.com'))
console.log(validator.isURL('https://qq.com'))
console.log(validator.isURL('https:/.com'))





// const add = require('./utils.js')
// const sum = add(1, 3)
// console.log(sum)
