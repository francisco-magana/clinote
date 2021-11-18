const chalk = require("chalk");
const createNote = require("./commands/new-note");

const {getMainMenuOption, drawMainMenuTitle} = require("./inquirer/main-menu");
const pause = require("./inquirer/pause");

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
            default:
                console.log(chalk.bgRed('The option selected is not supported'));
                break;
        }

        await pause();
        
    } while(option != 0);


}

module.exports = main;