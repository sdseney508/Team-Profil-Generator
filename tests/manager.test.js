const Manager = require("../lib/Manager");

describe("Manager", () => {
  // Test for all use cases when initializing a new Employee object
  describe("methods", () => {
    it("should create an object with the name provided as an input", () => {
      const manager = new Manager("Steve Seney", 1, 'sdseney508@gmail.com', 5);

      // Verify that the new object has the correct properties
      expect(manager.getName()).toBe("Steve Seney");
    });

    it("should report back the Manager ID number", () => {
        const manager = new Manager("Steve Seney", 1, 'sdseney508@gmail.com', 5);

      // Verify that the new object has the correct properties
      expect(manager.getId()).toBe(1);
    });

    it("should spit out the office number", () => {
        const manager = new Manager("Steve Seney", 1, 'sdseney508@gmail.com', 5);

      // Verify that the new object has the correct properties
      expect(manager.getOfficeNumber()).toBe(5);
    });

    it("should spit out the email address", () => {
        const manager = new Manager("Steve Seney", 1, 'sdseney508@gmail.com', 5);

      // Verify that the new object has the correct properties
      expect(manager.getEmail()).toBe("sdseney508@gmail.com");
    });

    it("should spit out the a role of Manager", () => {
        const manager = new Manager("Steve Seney", 1, 'sdseney508@gmail.com', 5);

      // Verify that the new object has the correct properties
      expect(manager.getRole()).toBe("Manager");
    });

  });
});