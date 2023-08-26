const chalk = require('chalk');
const inquirer = require('inquirer');
const jsonDB = require('simple-json-db');
const path = require('path');

const Note = require('../models/note.model');

const db = new jsonDB(path.join(__dirname + '../../../database/clinoteDB.json'));

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

const createNote = async () => {
	const { title, content } = await inquirer.prompt(options);
	const note = new Note(title, content);
    console.log(chalk.green(`Your note was created succesfully!`) + '  ' + chalk.blueBright(note.createdAt));

	let notes  = db.get('notes');
	notes[note.id] = note;
	db.set('notes', notes);

	db.sync();
};

module.exports = createNote;
