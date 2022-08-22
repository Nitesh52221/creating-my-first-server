// http://localhost:8081
const http = require('http');

const port = 8081;

http.createServer((Request, Response) => {
    Response.writeHead(200, { 'Content-Type': 'text/html' });
    Response.write('<h1>Helllo , this is from my server</h1>');
    Response.end();
}).listen(port, () => {
    console.log(`My first Node Js server started on port ${port}`);
});



