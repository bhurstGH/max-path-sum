const http = require('http')
const fs = require('fs')

const port = 3000

const server = http.createServer((req, res) => {

    console.log("Requested" + req.url)
    if (req.url === "/style.css") {
        fs.readFile("./style.css", (err, data) => {
            if (err) throw err;
            res.writeHead(200, { "Content-Type": "text/css" })
            res.write(data)
            res.end()

        })
    }

    if (req.url === "/index.js") {
        fs.readFile("./index.js", (err, data) => {
            if (err) throw err;
            res.writeHead(200, { "Content-Type": "text/javascript" })
            res.write(data)
            res.end()
        })
    }

    if (req.url === "/") {

        fs.readFile("./index.html", (err, data) => {
            if (err) throw err;
            res.writeHead(200, { "Content-Type": "text/html" })
            res.write(data)

        })
    }
})

server.listen(port)