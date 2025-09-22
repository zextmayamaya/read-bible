const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer()

server.on('request', (req,res) => {
    const {url,method} = req

    if(url === '/' && method === 'GET') {
        console.log("right access!!!")
        fs.readFile(path.join(__dirname, "./index.html"), "utf8", (err, data) => {
            console.log("error is",err)
            console.log("data is",data)
            if(err) {
                return console.log("read file error!!!", err.message)
            }
            res.writeHeader(200,'Content-Type','text/html;charset=utf-8')
            res.write(data)
        })
        res.end()
    }
})

server.listen(8080, () => {
    console.log("server is running 8080")
})
