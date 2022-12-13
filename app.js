var validator = require('validator');
const chalk = require('chalk');


const command = process.argv[2]
console.log(process.argv)


if (command === 'add') {
    console.log('Adding note!')
}
else if (command === 'remove') {
    console.log('Removing note!')
}
























// const getNotes = require('./notes.js')
// const msg = getNotes()
// console.log(msg)


// console.log(validator.isEmail('11@qq.com'))
// console.log(validator.isURL('https://qq.com'))
// // console.log(validator.isURL('https:/.com'))


// console.log(chalk.bold.green.inverse('Success!'));
// console.log(chalk.inverse.red.bold('fail!'));
// console.log(chalk.bold.yellow.underline.inverse('yeah'));



// console.log(process.argv)


// const add = require('./utils.js')
// const sum = add(1, 3)
// console.log(sum)
