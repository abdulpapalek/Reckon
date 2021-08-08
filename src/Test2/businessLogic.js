const Api = require("./api");

const candidate = "Alexander Kevin R. Amante";

const persistResults = async () => {
    const { subTexts } = await Api.getSubtexts();
    const { text }= await Api.getTextToSearch();
    const response = {
      candidate,
      text,
      results: []
    };
    subTexts?.forEach(subtext => {
      const regex = new RegExp(subtext, "gi");
      const positions = [];
      let resultStr = "";
      while(regex.test(text)) {
          const pos = (regex.lastIndex - subtext.length) + 1;
          positions.push(pos);
      }

      if(positions.length == 0) {
          resultStr = "<No Output>";
      } else {
          let count = 0;
          positions.forEach(pos => {
              count++;
              if(count === positions.length) {
                  resultStr = resultStr.concat(String(pos));
                  return;
              }
              resultStr = resultStr.concat(String(pos) + ", ");
          });
      }

      response.results.push({
          subtext,
          result: resultStr
      });
    });
    return response;
};

module.exports = {
    persistResults,
};