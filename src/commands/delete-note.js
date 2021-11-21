const inquirer = require('inquirer');
const chalk = require('chalk');
const jsonDB = require('simple-json-db');
const path = require('path');

const deleteNoteOptions = [
    {
        type: 'list',
        name: 'deleteNote',
        message: 'Are you sure that you want to delete this note?',
        choices: [
            {
                name: 'No',
                value: false
            },
            {
                name: 'Yes',
                value: true
            }
        ]
    }
]

const deleteNote = async(noteID) => {
    
    const {deleteNote} = await inquirer.prompt(deleteNoteOptions);
    const db = new jsonDB(
		path.join(__dirname + '../../../database/clinoteDB.json')
	);
    
    if (deleteNote === false) {
        console.log(chalk.green`The note was not deleted, it is safe in your notebook :) `);
    } else {
        const notes = db.get('notes');
        delete notes[noteID];
        db.set('notes', notes);
        db.sync();
        console.log(chalk.redBright(`YOUR NOTE WAS DELETED, IT'S IMPOSIBLE TO UNDO THIS OPERATION`));
    }
}

module.exports = deleteNote;