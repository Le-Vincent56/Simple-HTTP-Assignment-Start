// Imports
const text = require('./textResponses.js');

// Server Functions
const getHelloJSON = (request, response) => {
  // Create a JSON using the "hello" const
  const helloJSON = {
    message: text.hello,
  };

  // Parse the JSON into a string
  const stringMessage = JSON.stringify(helloJSON);

  // Write the parsed JSON as a response to the user
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(stringMessage);
  response.end();
};

const getTimeJSON = (request, response) => {
  // Create a JSON using the getTimeString() function
  const timeJSON = {
    time: text.getTimeString(),
  };

  // Parse the JSON into a string
  const stringMessage = JSON.stringify(timeJSON);

  // Write the parsed JSON as a response to the user
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(stringMessage);
  response.end();
};

// Exports
module.exports.getHelloJSON = getHelloJSON;
module.exports.getTimeJSON = getTimeJSON;
