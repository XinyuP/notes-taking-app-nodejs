var validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs')


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
    handler: function(argv) {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }

})

// Creare remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing a note!!!')
    }

})

// Creare read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log('Reading a note!!!')
    }

})

// Creare list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function() {
        console.log('Listing all note!!!')
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
