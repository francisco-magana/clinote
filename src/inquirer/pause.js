const chalk = require('chalk');
const inquirer = require('inquirer');

const options = [{
    type: 'input',
    name: 'pause',
    message: `Press ${chalk.green('ENTER')} to continue`
}];

/**
 * A function that stops the tool to show a message or await for user input
 * @returns true if you want to validate the pause for some reason
 */
const pause = async() => {

    await inquirer.prompt(options);
    return true;

}

module.exports = pause;