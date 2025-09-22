const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer()

server.on('request', (req,res) => {
    const {url,method} = req

    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
    console.log("url is", url)
    console.log("method is", method)
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")

    if(url === '/' && method === 'GET') {
        fs.readFile(path.join(__dirname, "./index.html"), "utf8", (err, data) => {
            if(err) {
                return console.log("read file error!!!", err.message)
            }
            res.writeHead(200,'Content-Type','text/html;charset=utf-8')
            res.write(data)
            res.end()
        })
    }

    if(url === '/kaithhealthcheck' && method === 'GET') {
        res.writeHead(200)
        res.end()
    }

})

server.listen(8080, () => {
    console.log("server is running 8080")
})
