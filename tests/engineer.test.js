const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  // Test for all use cases when initializing a new Employee object
  describe("methods", () => {
    it("should create an object with the name provided as an input", () => {
      const engineer = new Engineer("Steve Seney", 1, 'sdseney508@gmail.com',"sdseney508");

      // Verify that the new object has the correct properties
      expect(engineer.getName()).toBe("Steve Seney");
    });

    it("should report back the Engineer ID number", () => {
      const engineer = new Engineer("Steve Seney", 1, 'sdseney508@gmail.com',"sdseney508");

      // Verify that the new object has the correct properties
      expect(engineer.getId()).toBe(1);
    });

    it("should spit out the github username", () => {
      const engineer = new Engineer("Steve Seney", 1, 'sdseney508@gmail.com',"sdseney508");

      // Verify that the new object has the correct properties
      expect(engineer.getGithub()).toBe("sdseney508");
    });

    it("should spit out the email address", () => {
      const engineer = new Engineer("Steve Seney", 1, 'sdseney508@gmail.com',"sdseney508");

      // Verify that the new object has the correct properties
      expect(engineer.getEmail()).toBe("sdseney508@gmail.com");
    });

    it("should spit out the a role of Engineer", () => {
      const engineer = new Engineer("Steve Seney", 1, 'sdseney508@gmail.com',"sdseney508");

      // Verify that the new object has the correct properties
      expect(engineer.getRole()).toBe("Engineer");
    });

  });
});

//verify the errors to make sure info entered is in proper format.
//Need to check name, ID, email, and github.  
// it("should throw an error if the name is blank / null", () => {
//   const cb = () => new Engineer('', 1, 'sdseney508@gmail.com');
//   const err = new Error("Name should be a non-empty string.  Please try again.");

//   expect(cb).toThrowError(err);
// });

// it("should throw an error if name is not a string", () => {
//   const cb = () => new Engineer(3, 3,"sdseney508@gmail.com", "sdseney508");
//   const err = new Error("Name should be a non-empty string.  Please try again.");

//   expect(cb).toThrowError(err);
// });

// it("should throw an error if ID is less than 0", () => {
//   const cb = () => new Engineer("Steve Seney", -1, 'sdseney508@gmail.com');
//   const err = new Error("Employee ID number should be a non-negative Integer.  Please try again.");

//   expect(cb).toThrowError(err);
// });

// it("should throw an error if email is blank / null", () => {
//   const cb = () => new Engineer("Steve Seney", 3, '');
//   const err = new Error("Email should be a non-empty string.  Please try again.");

//   expect(cb).toThrowError(err);
// });
// it("should throw an error if email is not a string", () => {
//   const cb = () => new Engineer("Steve Seney", 1, 5,"sdseney508");
//   const err = new Error("Email should be a non-empty string.  Please try again.");

//   expect(cb).toThrowError(err);
// });

// it("should throw an error if github is not a string", () => {
//   const cb = () => new Engineer("Steve Seney", 1, "sdseney508@gamil.com", 5);
//   const err = new Error("Github username should be a non-empty string.  Please try again.");

//   expect(cb).toThrowError(err);

// });    it("should throw an error if github is null", () => {
//   const cb = () => new Engineer("Steve Seney", 1, "sdseney508@gamil.com", '');
//   const err = new Error("Github username should be a non-empty string.  Please try again.");

//   expect(cb).toThrowError(err);
// });