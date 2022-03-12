const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) { 
        // id = parseInt(id);
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }
    
    getOfficeNumber() {
        return  this.officeNumber;
    }

    getRole() {
        return "Manager"
    }
    
}

module.exports = Manager;