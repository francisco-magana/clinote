const inquirer = require('inquirer');
const jsonDB = require('simple-json-db');
const path = require('path');
const pause = require('../inquirer/pause');

const getAllNoteTitles = () => {

    const db = new jsonDB(path.join(__dirname + '../../../database/clinoteDB.json'));

    let choices = [];
    let notes = db.get('notes');
    
    const noteKeys = Object.keys(notes)
    for (let key of noteKeys) {
        choices.push({
            value: notes[key].id,
            name: notes[key].title
        });
    }

    // Add default no want to read option
    choices.push({
        value: 'no-read',
        name: 'I do not want a note, thanks!'
    })

    return choices;

}

const listNotesAndGetID = async() => {

    const options = [{
        type: 'list',
        name: 'noteID',
        choices: getAllNoteTitles()
    }];
    
    const {noteID} = await inquirer.prompt(options);
    return noteID;

}

module.exports = listNotesAndGetID;
