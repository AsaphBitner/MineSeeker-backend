// const http = require('http')
// const server = http.createServer(function (req, res) {
//    res.writeHead(200, {'Content-Type': 'text/html'})
//    res.end(`Hello <b>User</b> - ${Date.now()} \n`)
// })
// const port = 3030;
// server.listen(port, '127.0.0.1')
// console.log(`Server running at http://127.0.0.1:${port}/`)
const path = require('path')
const express = require('express')
const app = express()
const port = process.env.PORT || 3030;
const publicPath = path.join(__dirname, '/', 'public')
app.use(express.static(publicPath))

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
 })

 app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 })





