const fs = require('node:fs')
fs.writeFileSync('notes.txt', 'This file was created by Node.js!')
//fs.writeFileSync('notes.txt', 'My name is Blaire!!!') // overwritten 
fs.appendFileSync('notes.txt', ' My name is Blaire!!!') // append at the end  