const Employee = require("../lib/Employee");

describe("Employee", () => {
  // Test for all use cases when initializing a new Employee object
  describe("Methods", () => {
    it("should create an object with the name provided as an input", () => {
      const employee = new Employee("Steve Seney", 1, 'sdseney508@gmail.com');

      // Verify that the new object has the correct properties
      expect(employee.name).toEqual("Steve Seney");
    });
    
    
    it("should report back the Employee ID number", () => {
      const employee = new Employee("Steve Seney", 1, 'sdseney508@gmail.com');
      
      // Verify that the new object has the correct properties
      expect(employee.id).toEqual(1);
    });
    
    it("should spit out the email address", () => {
      const employee = new Employee("Steve Seney", 1, 'sdseney508@gmail.com');
      
      // Verify that the new object has the correct properties
      expect(employee.email).toEqual("sdseney508@gmail.com");
    });
    
    it("should assign the Role of Employee", () => {
      const employee = new Employee("Steve Seney", 1, 'sdseney508@gmail.com');
      
      // Verify that the new object has the correct properties
      expect(employee.getRole()).toBe("Employee");
    });
  });
});

// it("should throw an error if the name is blank / null", () => {
//   const cb = () => new Employee('', 1, 'sdseney508@gmail.com');
//   const err = new Error("Name should be a non-empty string.  Please try again.");

//   expect(cb).toThrowError(err);
// });

// it("should throw an error if name is not a string", () => {
//   const cb = () => new Employee(3, "sdseney508@gmail.com", "2");
//   const err = new Error("Name should be a non-empty string.  Please try again.");

//   expect(cb).toThrowError(err);
// });

// it("should throw an error if email is not a string", () => {
//   const cb = () => new Employee("Steve Seney", 3, 2);
//   const err = new Error("Email should be a non-empty string.  Please try again.");

//   expect(cb).toThrowError(err);
// });

// it("should throw an error if email is null", () => {
//   const cb = () => new Employee('Steve Seney', 3, "");
//   const err = new Error("Name should be a non-empty string.  Please try again.");

//   expect(cb).toThrowError(err);
// });

// it("should throw an error if ID is less than 0", () => {
//   const cb = () => new Employee("Steve Seney", -1, 'sdseney508@gmail.com');
//   const err = new Error("Employee ID number should be a non-negative Integer.  Please try again.");

//   expect(cb).toThrowError(err);
// });