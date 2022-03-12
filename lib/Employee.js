
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;


//     if(typeof id !== "number" || id <= 0) {
//     throw new Error("Employee ID number should be a non-negative Integer.  Please try again.");
// };
// if (typeof name !== "string" || name.length === 0) {
//     throw new Error("Name should be a non-empty string.  Please try again.");
// };

// if (typeof email !== "string" || email.length === 0) {
//     throw new Error("Email should be a non-empty string.  Please try again.");
// };