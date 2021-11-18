const chalk = require('chalk');
const inquirer = require('inquirer');

const Note = require('../models/note.model');


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
	},
	{
		type: 'list',
		name: 'password',
		message: 'Do you want to protect your note with your master password?',
		choices: [
			{
				value: true,
				name: 'Yes',
			},
			{
				value: false,
				name: 'No',
			},
		],
	},
];

/**
 * Method that allow us to create a new note by prompt
 */
const createNote = async () => {
	const { title, content, password } = await inquirer.prompt(options);
	const note = new Note(title, content, password);
    console.log(chalk.bgGreen(`Your note was created succesfully!`) + '  ' + chalk.bgBlue(note.createdAt));
	console.log(note);
};

module.exports = createNote;
