const jsonDB = require('simple-json-db');
const path = require('path');
const chalk = require('chalk');

const readNote = (noteID) => {

    const db = new jsonDB(path.join(__dirname + '../../../database/clinoteDB.json'));
    const noteToRead = db.get('notes')[noteID];

    console.log(chalk.greenBright('\nYOU ARE READING YOUR NOTE NOW'));

    console.log(`\n${chalk.greenBright('Title: ')} ${noteToRead.title}`);
    console.log(`${chalk.greenBright('Date: ')} ${noteToRead.createdAt}`);
    console.log(`\n${chalk.greenBright('Content: ')} ${noteToRead.content}\n\n`);

}

module.exports = readNote;