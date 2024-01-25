// Imports
const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const textHandler = require('./textResponses.js');
const jsonHandler = require('./jsonResponses.js');
const imageHandler = require('./imageResponses.js');

// Establish a server port
const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  console.log(request.url);

  // Decide which page to load
  switch (request.url) {
    // If no specific URL is given, direct to index.html
    case '/':
      htmlHandler.getIndex(request, response);
      break;

    // If "page2" is included in the URL, direct to page2.html
    case '/page2':
      htmlHandler.getPage2(request, response);
      break;

    // If "hello" is included in the URL, return hello from textHandler
    case '/hello':
      textHandler.getHello(request, response);
      break;

    // If "time" is included in the URL, return the time from textHandler
    case '/time':
      textHandler.getTime(request, response);
      break;

    // If "helloJSON" is included in the URL, return hello from jsonHandler
    case '/helloJSON':
      jsonHandler.getHelloJSON(request, response);
      break;

    // If "timeJSON" is included in the URL, return the time from jsonHandler
    case '/timeJSON':
      jsonHandler.getTimeJSON(request, response);
      break;

    // If "dankmemes" is included in the URL, return the spongegar iamge from imageHandler
    case '/dankmemes':
      imageHandler.getSpongegar(request, response);
      break;

    // Default to index.html
    default:
      htmlHandler.getIndex(request, response);
      break;
  }
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on 127.0.0.1:${port}`);
});
