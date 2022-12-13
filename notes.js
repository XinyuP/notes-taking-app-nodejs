const { default: chalk } = require('chalk');
const fs = require('fs');
const getNotes = function () {
	return 'Your notes....';
};

const addNotes = function (title, body) {
	const notes = loadNotes();

	const duplicateNotes = notes.filter(function (note) {
		return note.title === title;
	});

	if (duplicateNotes.length === 0) {
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

const removeNotes = function (title) {
	const notes = loadNotes();
	const notesToKeep = notes.filter(function (note) {
		return note.title !== title;
	});
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

const saveNotes = function (notes) {
	const dataJSON = JSON.stringify(notes); // convert object to string
	fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = function () {
	try {
		const dataBuffer = fs.readFileSync('notes.json'); // binary
		const dataJSON = dataBuffer.toString(); // stirng
		return JSON.parse(dataJSON);
	} catch (e) {
		return [];
	}
};

module.exports = {
	getNotes: getNotes,
	addNotes: addNotes,
	removeNotes: removeNotes,
};
