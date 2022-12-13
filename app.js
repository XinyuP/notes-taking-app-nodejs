var validator = require('validator');
//import chalk from 'chalk';
const chalk = require('chalk');
const getNotes = require('./notes.js')
const msg = getNotes()
console.log(msg)


console.log(validator.isEmail('11@qq.com'))
console.log(validator.isURL('https://qq.com'))
// console.log(validator.isURL('https:/.com'))


console.log(chalk.bold.green.inverse('Success!'));
console.log(chalk.red.bold('fail!'));
console.log(chalk.bold.blue.underline.inverse('yeah'));




// const add = require('./utils.js')
// const sum = add(1, 3)
// console.log(sum)
