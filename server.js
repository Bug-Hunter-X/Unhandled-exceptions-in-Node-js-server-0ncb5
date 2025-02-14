const http = require('http');

const server = http.createServer((req, res) => {
  // Logic to handle incoming requests
  // ...
  res.end();
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

//This is an example of a bug.  Error handling is missing.  If there is an error, the server will crash. 
//Try adding error handling.
//In a larger application this could be a significant problem. 