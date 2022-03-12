const inquirer = require('inquirer');
const team_object = [];

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
      {
        type: 'input',
        name: 'location',
        message: 'Where are you from?',
      },
      {
        type: 'input',
        name: 'hobby',
        message: 'What is your favorite hobby?',
      },
    ])

    .then((answers) => {
        if (team_array.length === 0) {

        }
        else {

        }
    })
  };



  module.exports = team_object;