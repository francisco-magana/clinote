const chalk = require("chalk");

const {getMainMenuOption, drawMainMenuTitle} = require("./inquirer/main-menu");
const pause = require("./inquirer/pause");
const Note = require("./models/note.model");

const main = async() => {

    let option;

    do {

        drawMainMenuTitle();
        option = await getMainMenuOption();
        
        switch(option) {
            default:
                console.log(chalk.bgRed('The option selected is not supported'));
                break;
        }

        pause();
        
    } while(option != 0);


}

module.exports = main;