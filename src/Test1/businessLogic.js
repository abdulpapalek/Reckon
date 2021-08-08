const Api = require("./api");
const buildList = async () => {
  let htmlStr = "";

  const { lower, upper } = await Api.getRangeInfo();
  const { outputDetails } = await Api.getDivisorInfo();
  let row;
  if (outputDetails?.length > 0) {
    for(let i=lower; i<=upper; i++) {
        if (i % outputDetails[0]?.divisor===0) {
          row = `<tr><td>${i}: ${outputDetails[0]?.output}</td></tr>`;
        } else if (i % outputDetails[1].divisor===0) {
          row = `<tr><td>${i}: ${outputDetails[1]?.output}</td></tr>`;
        } else {
          row = `<tr><td>${i}:</td></tr>`;
        }
        htmlStr = htmlStr.concat(row) ;
      }
  }
  return htmlStr;
};

module.exports = {
    buildList,
};