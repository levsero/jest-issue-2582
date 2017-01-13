/* eslint-env jest */
describe("enabled", () => {
  describe("when enabled", () => {
    it("renders enabled", () => {
      jest.mock("../features", () => ({
        isEnabled: () => true
      }));

      const enabled = require('../enabled').default;
      expect(enabled()).toEqual('Enabled');
    });
  });

  describe("when disabled", () => {
    it("renders disabled", () => {
      jest.mock("../features", () => ({
        isEnabled: () => false
      }));

      const enabled = require('../enabled').default;
      // This is still Enabled as it does not use the second mock
      expect(enabled()).toEqual('Disabled');
    });
  });
});
