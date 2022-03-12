const Intern = require("../lib/Intern");

describe("Intern", () => {
  // Test for all use cases when initializing a new Employee object
  describe("methods", () => {
    it("should create an object with the name provided as an input", () => {
      const intern = new Intern("Steve Seney", 1, 'sdseney508@gmail.com',"WPI");

      // Verify that the new object has the correct properties
      expect(intern.getName()).toBe("Steve Seney");
    });

    it("should report back the Intern ID number", () => {
      const intern = new Intern("Steve Seney", 1, 'sdseney508@gmail.com',"WPI");

      // Verify that the new object has the correct properties
      expect(intern.getId()).toBe(1);
    });

    it("should spit out the school attended", () => {
      const intern = new Intern("Steve Seney", 1, 'sdseney508@gmail.com',"WPI");

      // Verify that the new object has the correct properties
      expect(intern.getSchool()).toBe("WPI");
    });

    it("should spit out the email address", () => {
      const intern = new Intern("Steve Seney", 1, 'sdseney508@gmail.com',"WPI");

      // Verify that the new object has the correct properties
      expect(intern.getEmail()).toBe("sdseney508@gmail.com");
    });

    it("should spit out the a role of Intern", () => {
      const intern = new Intern("Steve Seney", 1, 'sdseney508@gmail.com',"WPI");

      // Verify that the new object has the correct properties
      expect(intern.getRole()).toBe("Intern");
    });

  });
});