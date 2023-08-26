const chalk = require('chalk');
const inquirer = require('inquirer');
const jsonDB = require('simple-json-db');
const path = require('path');

const Note = require('../models/note.model');

// Open the JSON database with a package
const db = new jsonDB(path.join(__dirname + '../../../database/clinoteDB.json'));


/**
 * Steps to make the note
 */
const options = [
	{
		type: 'input',
		name: 'title',
		message: 'Title:',
	},
	{
		type: 'input',
		name: 'content',
		message: 'Content:',
	}
];

/**
 * Method that allow us to create a new note by prompt
 */
const createNote = async () => {
	const { title, content } = await inquirer.prompt(options);
	const note = new Note(title, content);
    console.log(chalk.green(`Your note was created succesfully!`) + '  ' + chalk.blueBright(note.createdAt));
	
	// Save the note in the DB
	let notes  = db.get('notes');
	notes[note.id] = note;
	db.set('notes', notes);

	// Sync the file with de new values
	db.sync();
};

module.exports = createNote;
