const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) { 
        // id = parseInt(id);
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
        this.role = 'Engineer';
    }
    
    getGithub() {
        return  this.github;
    }

    getRole() {
        return "Engineer"
    }
    
}

module.exports = Engineer;

// if (typeof id !== "number" || id <= 0) {
//     throw new Error("Employee ID number should be a non-negative Integer.  Please try again.");
// };
// if (typeof (name) !== "string" || name.length === 0) {
//     throw new Error("Name should be a non-empty string.  Please try again.");
// };
// if (typeof (email) !== "string" || email.length === 0) {
//     throw new Error("Email should be a non-empty string.  Please try again.");
// };

// if (typeof (github) !== "string" || github.length === 0) {
//     throw new Error("Github username should be a non-empty string.  Please try again.");
// };