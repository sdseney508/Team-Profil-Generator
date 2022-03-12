const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) { 
        // id = parseInt(id);
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        this.role = 'Intern';
    }
    
    getSchool() {
        return  this.school;
    }

    getRole() {
        return "Intern"
    }
    
}

module.exports = Intern;