const chalk = require('chalk');
const inquirer = require('inquirer');
const { async } = require('rxjs');

const options = [{
    type: 'input',
    name: 'pause',
    message: `Press ${chalk.green('ENTER')} to continue`
}];

const pause = async() => {

    await inquirer.prompt(options);
    return true;

}

module.exports = pause;