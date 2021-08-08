/* eslint-disable */
const BusinessLogic = require("./businessLogic");
const Api = require("./api");

describe("BusinessLogic", () => {  
    afterEach(() => {
      // cleaning up the mess left behind the previous test
      jest.clearAllMocks();
    });
  
    test("Success: Should be able to send submit correctly", async () => {
        Api.getSubtexts = jest.fn(async () => Promise.resolve({
            subTexts: [
              "Peter",
              "peter",
              "Pick",
              "Pi",
              "Z"
            ]
          }
        ));
        Api.getTextToSearch = jest.fn(async () => Promise.resolve({
          text: "Peter told me (actually he slurrred) that peter the pickle piper piped a pitted pickle before he petered out. Phew!"
          }
        ));
        expect(await BusinessLogic.persistResults()).toMatchSnapshot();;
    });
});