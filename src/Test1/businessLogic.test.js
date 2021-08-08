/* eslint-disable */
const BusinessLogic = require("./businessLogic");
const Api = require("./api");

describe("BusinessLogic", () => {  
    afterEach(() => {
      // cleaning up the mess left behind the previous test
      jest.clearAllMocks();
    });
  
    test("Success: Should return the correct list inside html template", async () => {
        Api.getRangeInfo = jest.fn(async () => Promise.resolve({
            lower: 0,
            upper: 100
          }));
        Api.getDivisorInfo = jest.fn(async () => Promise.resolve({
              outputDetails: [
                  {
                      divisor: 3,
                      output: "Peppa"
                  },
                  {
                      divisor: 5,
                      output: "Pig"
                  }
              ]
          }));
        expect(await BusinessLogic.buildList()).toMatchSnapshot();;
      });
});