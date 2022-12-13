const { default: chalk } = require('chalk');
const fs = require('fs');

const getNodes = () => {
    return "Your notes..."
}

const addNotes = (title, body) => {
	const notes = loadNotes();
    //const duplicateNotes = notes.filter(note => note.title === title);
    const duplicateNote = notes.find(note => note.title === title); // return undefined if no match

	// if (duplicateNotes.length === 0) {
    if (!duplicateNote) {
		notes.push({
			title: title,
			body: body,
		});
		saveNotes(notes);
		console.log(chalk.bgGreen('New notes added!'));
	} else {
		console.log(chalk.bgRed('Note title taken!'));
	}
};

const removeNotes = title => {
	const notes = loadNotes();
    const notesToKeep = notes.filter(note => note.title !== title);
	// if (notesToKeep.length === notes.length) {
	//     console.log(chalk.bgRed("No note found!"))
	// }
	// else {
	//     console.log(chalk.bgGreen("Note removed!"))
	// }

	if (notes.length > notesToKeep.length) {
		console.log(chalk.green.inverse('Note removed!'));
	} else {
		console.log(chalk.red.inverse('No note found!'));
	}

	saveNotes(notesToKeep);
};

const saveNotes = notes => {
	const dataJSON = JSON.stringify(notes); // convert object to string
	fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync('notes.json'); // binary
		const dataJSON = dataBuffer.toString(); // stirng
		return JSON.parse(dataJSON);
	} catch (e) {
		return [];
	}
};


const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.bgGreen('Listing all note!'))
    notes.forEach((note) => {
		console.log(chalk.red(note.title));
	});
}

module.exports = {
    getNodes: getNodes,
	addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes
};

