const inquirer = require('inquirer');
const chalk = require('chalk');
const jsonDB = require('simple-json-db');
const path = require('path');

const editTitleOptions = [
	{
		type: 'list',
		name: 'editTitle',
		message: 'Do you want to edit the note title?',
		choices: [
			{
				name: 'No',
				value: false,
			},
			{
				name: 'Yes',
				value: true,
			},
		],
	},
];

const getNewNoteTitleOptions = [
	{
		type: 'input',
		name: 'newNoteTitle',
		message: 'Write the new title of the note',
	},
];

const editContentOptions = [
	{
		type: 'list',
		name: 'editContent',
		message: 'Do you want to edit the note content?',
		choices: [
			{
				name: 'No',
				value: false,
			},
			{
				name: 'Yes',
				value: true,
			},
		],
	},
];

const getNewNoteContent = [
	{
		type: 'input',
		name: 'newNoteContent',
		message: 'Write the new content of the note',
	},
];

const editNotes = async (noteID) => {
	let newNoteTitle = '',
		newNoteContent = '';

	const db = new jsonDB(
		path.join(__dirname + '../../../database/clinoteDB.json')
	);

	const noteToEdit = db.get('notes')[noteID];
	console.log(noteToEdit);

	// Edit Titlte of the note
	const { editTitle } = await inquirer.prompt(editTitleOptions);

	if (editTitle) {
		let result = await inquirer.prompt(getNewNoteTitleOptions);
		newNoteTitle = result.newNoteTitle;
	}

	// Edit the content of the note
	const { editContent } = await inquirer.prompt(editContentOptions);

	if (editContent) {
		let result = await inquirer.prompt(getNewNoteContent);
		newNoteContent = result.newNoteContent;
		console.log(newNoteContent);
	}

	noteToEdit.title = editTitle ? newNoteTitle : noteToEdit.title;
	noteToEdit.content = editContent ? newNoteContent : noteToEdit.content;

	if (editTitle || editContent) {
		const notes = db.get('notes');
		notes[noteID] = noteToEdit;
		db.set('notes', notes);
		db.sync();
	}
};

module.exports = editNotes;
