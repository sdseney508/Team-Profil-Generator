 fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
var generate_html = '';
const team_array = [];

function makeCardScript(t_array) {
    t_array.forEach(element => {
        if (element.role == 'Manager') {
            generate_html = generate_html +
                `<div class="columns">
                    <div class="card team_card">
                        <div class="card-section card_title">
                            ${element.name}<br>Manager
                        </div>
                        <div class="card-divider">
                            <div>Employee ID: ${element.id}</div>
                            <div>E-mail: <a href="mailto:${element.email}">${element.email}</a></div>
                            <div>Office Number: ${element.officeNumber} </div>
                        </div>
                    </div>
                </div>`
        }
        else if (element.role == 'Engineer') {
            generate_html = generate_html +
                `<div class="columns">
                    <div class="card team_card">
                        <div class="card-section card_title">
                            ${element.name}<br>Engineer
                        </div>
                        <div class="card-divider">
                            <div>Employee ID: ${element.id}</div>
                            <div>E-mail: <a href="mailto:${element.email}">${element.email}</a></div>
                            <div>Github: <a href="https://github.com/${element.github}" class="italics">${element.github}</a></div>
                        </div>
                    </div>
                </div>`
        }
        else {
            generate_html = generate_html +
            `<div class="columns">
                <div class="card team_card">
                    <div class="card-section card_title">
                        ${element.name}<br>Intern
                    </div>
                    <div class="card-divider">
                        <div>Employee ID: ${element.id}</div>
                        <div>E-mail: <a href="mailto:${element.email}">${element.email}</a></div>
                        <div>School: ${element.school}</div>
                    </div>
                </div>
            </div>`;
        }
    });
    fs.writeFile('index.html', build_html(generate_html), (err) =>
        err ? console.log('Oh Oh') : console.log('Successfully created index.html!')
    )

};

const manager_questions = [
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
    {
        type: 'list',
        name: 'build_team',
        message: 'Select a type of team member to add to your team or if your team is complete.',
        choices: ['Engineer', 'Intern', 'Team is Complete']
    },
];

const engineer_questions =
    [
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
        {
            type: 'list',
            name: 'build_team',
            message: 'Select a type of team member to add to your team or if your team is complete.',
            choices: ['Engineer', 'Intern', 'Team is Complete']
        },

    ];

const intern_questions = [
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
    {
        type: 'list',
        name: 'build_team',
        message: 'Select a type of team member to add to your team or if your team is complete.',
        choices: ['Engineer', 'Intern', 'Team is Complete']
    },
];

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
<body>
<header>
<div class="grid-container">
<div class="grid-x grid-padding-x">
<h1 class="text_center">My Team</h1>
</div>
</div>
</header>
<main>
<div class="row small-up-2 medium-up-3 large-up-4 align-center">
${generate_html}
</div>
</main>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://code.jquery.com/ui/1.13.0/jquery-ui.min.js"></script>
<script src="js/vendor/what-input.js"></script><script src="js/vendor/foundation.js"></script></body></html>`;

//initialize everything by asking the manager questions.
function ask_questions(questions) {
    inquirer.prompt(questions).then((answers) => {
        const mgr = new Manager(answers.name, answers.id, answers.email, answers.office_num);
        team_array.push(mgr);
        //pass the response about adding new team members.
        build_team(answers.build_team);
    });
}

//build the team array that will be used to build the team cards for the website.
function build_team(member_type) {
    if (member_type === 'Engineer') {
        inquirer.prompt(engineer_questions).then((answers) => {
            const eng = new Engineer(answers.name, answers.id, answers.email, answers.github);
            team_array.push(eng);
            build_team(answers.build_team);
        });
    }
    else if (member_type === 'Intern') {
        inquirer.prompt(intern_questions).then((answers) => {
            const int = new Intern(answers.name, answers.id, answers.email, answers.school);
            team_array.push(int);
            build_team(answers.build_team);
        });
    }
    else {
        //pass off to make_card_script.  output of that will be passed off to build_website
        makeCardScript(team_array);
    }
}

ask_questions(manager_questions);