// Imports - Pull in the "file system" module
const fs = require('fs');

// Load files into memory - can be done synchronously because
// it is done on startup
const spongegar = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

// Server Functions
const getSpongegar = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(spongegar);
  response.end();
};

// Exports
module.exports.getSpongegar = getSpongegar;
