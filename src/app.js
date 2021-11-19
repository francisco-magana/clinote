const chalk = require("chalk");
const createNote = require("./commands/new-note");
const listNotesAndGetID = require('./commands/list-notes');

const {getMainMenuOption, drawMainMenuTitle} = require("./inquirer/main-menu");
const pause = require("./inquirer/pause");
const readNote = require("./commands/read-note");

/**
 * The main funtion of the app
 */
const main = async() => {

    let option;

    do {

        drawMainMenuTitle();
        option = await getMainMenuOption();
        
        switch(option) {
            case 1:
                await createNote();
                break;
            case 2:
                let noteID = await listNotesAndGetID();
                if (noteID !== 'no-read') {
                    readNote(noteID);
                }
                break;
            default:
                console.log(chalk.bgRed('The option selected is not supported'));
                break;
        }

        await pause();
        
    } while(option != 0);


}

module.exports = main;