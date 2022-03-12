const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
var generate_html = '';
const team_array = [];
var html_page_content = '';

const team_select = () => {
    for (i = 0; i < 2; i++) {
        inquirer.prompt([
            {
                type: 'list',
                name: 'build_team',
                message: 'Select a type of team member to add to your team or if your team is complete.',
                choices: ['Manager', 'Engineer', 'Intern', 'Team is Complete']
            },
        ])
            .then((answers) => {
                if (answers.build_team === 'Manager') {
                    build_manager();

                }
                else if (answers.build_team === 'Engineer') {
                    build_engineer();

                }
                else if (answers.build_team === 'Intern') {
                    build_intern();

                }
                else {
                    console.log("This is in the team_select function: " + generate_html);
                }
            });
    }
};

const build_manager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your employee ID Number?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'office_num',
            message: 'What is your Office Number?',
        },

    ])
        .then((answers) => {
            const mgr = new Manager(answers.name, answers.id, answers.email, answers.office_num);
            team_array.push(mgr);
            generate_html = generate_html + `<div class="column">
                <div class="card team_card">
                    <div class="card-divider card_title"> ${answers.name}<br>Manager</div>
                    <div>Employee ID: ${answers.id}</div>
                    <div>E-mail: <a href="mailto:${answers.email}">${answers.email}</a></div>
                    <div>Office Number: ${answers.office_num} </div>
                </div>
            </div>`
        })

        .then(() => {
            team_select();
        })
};

const build_engineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is their name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is their employee ID Number?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your their email address?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is their github name?',
        },

    ])
        .then((answers) => {
            const eng = new Engineer(answers.name, answers.id, answers.email, answers.github);
            team_array.push(eng);
            generate_html = generate_html + `
            <div class="column">
                <div class="card team_card">
                    <div class="card-divider">${answers.name}<br>Engineer</div>
                    <div>Employee ID: ${answers.id}</div>
                    <div>E-mail: <a href="mailto:${answers.email}">${answers.email}</a></div>
                    <div>Github: <a href="https://github.com/${answers.github}" class="italics">${answers.github}</a></div>
                </div>
            </div>`
        })
        .then(() => {
            return team_select();
        });
};

const build_intern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is their name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is their employee ID Number?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your their Email address?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school do they attend?',
        },

    ])
        .then((answers) => {
            const int = new Intern(answers.name, answers.id, answers.email, answers.school);
            team_array.push(int);
            generate_html = generate_html + `<div class="card team_card">
            <div class="card-divider">${answers.name}<br>Intern</div>
            <div>Employee ID: ${answers.id}</div>
            <div>E-mail: <a href="mailto:${answers.email}">${answers.email}</a></div>
            <div>School: ${answers.school}</div>
            </div>`;
        })

        .then(() => {
            return team_select();
        });
};

const build_html = (gen_html) =>
    `<!doctype html><html lang="en" dir="ltr">
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./dist/css/reset.css">
    <link rel="stylesheet" href="https://dhbhdrzi4tiry.cloudfront.net/cdn/sites/foundation.min.css">
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.13.0/themes/base/jquery-ui.css" />
    <script src="https://kit.fontawesome.com/f153357c8e.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./dist/css/app.css">
    <link rel="stylesheet" href="./dist/css/style.css">
    <title>My Team</title></head>
    
    <body><header><div class="grid-container"><div class="grid-x grid-padding-x">
    <h1 class="text_center">My Team</h1></div></div></header><main><div class="grid-x grid-padding-x">
    <div class="row"><div class="columns small-up-4 medium-up-4 large-up-5"> ${gen_html}
    </div></div></div></main><script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://code.jquery.com/ui/1.13.0/jquery-ui.min.js"></script>
    <script src="js/vendor/what-input.js"></script><script src="js/vendor/foundation.js"></script></body></html>`;

const init = () => {
    team_select()
        .then(() => {
            console.log("This is from the .then after team_select: " + generate_html);
        })

        .then(() => {
            fs.writeFileSync('index.html', build_html(generate_html), (err) =>
                err ? console.log(err) : console.log('Successfully created index.html!')
            )
        });
};

init();
