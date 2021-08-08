const restify = require("restify");
const BusinessLogic = require("./businessLogic");
const Api = require("./api");

const initialize = () => {
  const server = restify.createServer();
  server.post("/submit", async (_, res, next)=>{
    const result = await BusinessLogic.persistResults();
    const resp = await Api.submitResults(result);
    res.send(200, resp);
    next();
  });

  server.listen(9999, () => {
    console.log("%s listening at %s", server.name, server.url);
  });
};

initialize();
