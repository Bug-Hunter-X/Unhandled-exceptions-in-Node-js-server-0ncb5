# Unhandled exceptions in Node.js server

This repository demonstrates a common error in Node.js applications: unhandled exceptions that cause the server to crash. The `server.js` file contains a simple HTTP server that lacks proper error handling.  When an error occurs, the server will terminate unexpectedly. 
The `serverSolution.js` demonstrates how to handle errors gracefully, preventing unexpected crashes.  Using try...catch blocks and event listeners is crucial for building robust applications. 

## How to reproduce

1. Clone the repository
2. Navigate to the directory
3. Run `node server.js`
4. Observe that the server starts.
5. Try sending a request to a non-existing route or trigger an error within the request handler.
6. The server will crash. (Ctrl+C to stop it)
7. Then run `node serverSolution.js` and observe the difference.  The server will not crash and logs the error to the console. 

## Solution

The `serverSolution.js` file provides a solution by implementing comprehensive error handling using `try...catch` blocks and listening for errors. This approach ensures that the server remains operational even when unexpected errors occur, allowing for graceful degradation and improved stability.