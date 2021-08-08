const restify = require("restify");
const Template = require("./template");

const initialize = () => {
  const server = restify.createServer();
  server.get("/", async (_, res, next)=>{
    const response = await Template.buildTemplate();
    res.writeHead(200, {
      "Content-Length": Buffer.byteLength(response),
      "Content-Type": "text/html"
    });
    res.write(response);
    res.end();
    next();
  });

  server.listen(9999, () => {
    console.log("%s listening at %s", server.name, server.url);
  });
};

initialize();
