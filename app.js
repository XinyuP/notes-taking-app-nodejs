var validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs')
const notes = require('./notes.js')

// refactor all functions to arrow function
// 1. if function is a method, use ES6 method definition syntax
// 2. otherwise, use most concise arrow function 
// 3. Test


// add, remove, read, list 

// Creare add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body)
    }

})

// Creare remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }  
    }, 
    handler(argv) {
        notes.removeNotes(argv.title)
    }

})



// Creare list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes()
    }
})


// Creare read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    }, 
    handler(argv) {
        notes.readNote(argv.title)
    }

})

//console.log(process.argv)
yargs.parse()
//console.log(yargs.argv)









// const command = process.argv[2]
// console.log(process.argv)


// if (command === 'add') {
//     console.log('Adding note!')
// }
// else if (command === 'remove') {
//     console.log('Removing note!')
// }
























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
