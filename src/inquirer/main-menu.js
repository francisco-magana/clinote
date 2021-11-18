const inquirer = require('inquirer');

const choices = [
	{
		value: 1,
		name: '[1] Create a note',
	},
	{
        value: 2,
        name: '[2] Read a note'
    },
    {
        value: 3,
        name: '[3] Edit a note'
    },
    {
        value: 4,
        name: '[4] Delete a note'
    },
    ,
    {
        value: 0,
        name: '[5] Exit application'
    },
];

const options = [
	{
		type: 'list',
		name: 'option',
		message: 'Select the option that you want to use',
		choices,
	},
];

/**
 * Function that controls and show all the options of the applicaction
 * @returns the option selected by the user in the menu
 */
const getMainMenuOption = async() => {

    const { option } = await inquirer.prompt(options);
    return option;

};

/**
 * Function that draws the main title of the application, it is here
 * to be easy to change in the future or show it in other places
 */
const drawMainMenuTitle = () => {

    console.clear();
   console.log('  ______   __        ______  __    __   ______   ________  ________ ');
   console.log(' /      \\ /  |      /      |/  \\  /  | /      \\ /        |/        |');
   console.log('/$$$$$$  |$$ |      $$$$$$/ $$  \\ $$ |/$$$$$$  |$$$$$$$$/ $$$$$$$$/ ');
   console.log('$$ |  $$/ $$ |        $$ |  $$$  \\$$ |$$ |  $$ |   $$ |   $$ |__    ');
   console.log('$$ |      $$ |        $$ |  $$$$  $$ |$$ |  $$ |   $$ |   $$    |   ');
   console.log('$$ |   __ $$ |        $$ |  $$ $$ $$ |$$ |  $$ |   $$ |   $$$$$/    ');
   console.log('$$ \\__/  |$$ |_____  _$$ |_ $$ |$$$$ |$$ \\__$$ |   $$ |   $$ |_____ ');
   console.log('$$    $$/ $$       |/ $$   |$$ | $$$ |$$    $$/    $$ |   $$       |');
   console.log(' $$$$$$/  $$$$$$$$/ $$$$$$/ $$/   $$/  $$$$$$/     $$/    $$$$$$$$/ \n\n');

}

module.exports = {getMainMenuOption, drawMainMenuTitle};