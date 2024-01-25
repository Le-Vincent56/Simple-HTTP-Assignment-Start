// Imports - Pull in the "file system" module
const fs = require('fs');

// Load files into memory - can be done synchronously because
// it is done on startup
const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);

// Server Functions
const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

const getPage2 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(page2);
  response.end();
};

// Export
module.exports.getIndex = getIndex;
module.exports.getPage2 = getPage2;
