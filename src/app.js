const chalk = require("chalk");
const createNote = require("./commands/new-note");
const listNotesAndGetID = require('./commands/list-notes');

const {getMainMenuOption, drawMainMenuTitle} = require("./inquirer/main-menu");
const pause = require("./inquirer/pause");
const readNote = require("./commands/read-note");
const editNotes = require('./commands/edit-note');
const deleteNote = require('./commands/delete-note');

/**
 * The main funtion of the app
 */
const main = async() => {

    let option, noteID;

    do {

        drawMainMenuTitle();
        option = await getMainMenuOption();
        
        switch(option) {
            case 1:
                await createNote();
                break;
            case 2:
                noteID = await listNotesAndGetID();
                if (noteID !== 'no-read') readNote(noteID);
                break;
            case 3:
                noteID = await listNotesAndGetID();
                if (noteID !== 'no-read')  await editNotes(noteID);
                break;
            case 4:
                noteID = await listNotesAndGetID();
                if (noteID !== 'no-read')  await deleteNote(noteID);
                break;
            case 0:
                console.log(chalk.greenBright('See you soon, my note writer <3 !'));
                break;
            default:
                console.log(chalk.bgRed('The option selected is not supported'));
                break;
        }

        await pause();
        
    } while(option != 0);


}

module.exports = main;