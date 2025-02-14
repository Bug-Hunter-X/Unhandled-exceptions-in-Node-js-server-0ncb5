const http = require('http');

const server = http.createServer((req, res) => {
  try {
    // Logic to handle incoming requests
    // ...
    res.end();
  } catch (error) {
    console.error('Error handling request:', error);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
});

server.on('error', (error) => {
  console.error('Server error:', error);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});