// http://localhost:8081
const http = require('http');

const toDoList = ["Complete Node Byte", "play Criket"];

const port = 8081;

http.createServer((req, res) => {
    const { method, url } = req
    if (url === "/todos") {
        if (method === "GET") {
            res.writeHead(200, { "Content-type": "text/hmtl" })
            res.write(toDoList.toString())
            res.end();
        } else if (method === "POST") {
            let body = "";
            req.on("error", (err) => {
                console.error(err);

            }).on("data", (chunk) => {
                body += chunk;
                console.log(chunk)
            }).on("end", () => {
                body = JSON.parse(body);
                console.log("data : ", body)
            })

        } else {
            res.writeHead(501)
        }

    }
    else {
        res.writeHead(404)

    }

}).listen(port, () => {
    console.log(`My first Node Js server started on port ${port}`);
});



