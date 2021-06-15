const http = require('http');

console.log("Hello World, I am in Node.");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((request, response) => {
    response.statusCode = 200; // success
    response.setHeader("Content-Type", "text/plain"); // returns plain text
    response.end("hello world");
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});