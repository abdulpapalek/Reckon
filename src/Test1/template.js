const BusinessLogic = require("./businessLogic");
const buildTemplate = async () => 
                `<html>
                    <head>
                      <style>
                      h1 {
                        background-color: grey;
                      }
                      </style>
                    </head>
                    <h1>Sample Output</h1>
                    <body>
                      <table>
                          ${await BusinessLogic.buildList()}
                      </table>
                    </body>
                  </html>`;

module.exports = {
    buildTemplate,
};