const {getMainMenuOption, drawMainMenuTitle} = require("./inquirer/main-menu");
const Note = require("./models/note.model");

const main = async() => {

    let option;

    do {
        drawMainMenuTitle();
        option = await getMainMenuOption();
        console.log(option);
    } while(option != 0);

}

module.exports = main;