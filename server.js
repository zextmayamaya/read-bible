const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer()
const serverport = 3095

server.on('request', (req,res) => {
    const {url,method} = req


    if(url === '/' && method === 'GET') {
        fs.readFile(path.join(__dirname, "./index.html"), "utf8", (err, data) => {
            if(err) {
                return console.log("read file error!!!", err.message)
            }
            res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
            res.write(data)
            res.end()
        })
        return
    }

    if(url === '/favicon.ico') {
        res.statusCode = 200
        res.end("ok")
        return
    }

    if(url === '/kaithhealthcheck' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('ok')
        return
    }

    if(url === '/sort_by_years.js' && method === 'GET') {
        fs.readFile(path.join(__dirname, './sort_by_years.js'), 'utf8', (err, data) => {
            console.log(data)
            if(err) return console.log("read sort_by_years.js file error:",err.message)
            res.statusCode = 200
            res.setHeader('Content-Type','text/html;charset=utf-8')
            res.end(data)
        })
    }
    return
})

// console.log(serverport)
server.listen(serverport, '0.0.0.0', () => {
    console.log(`server is running ${serverport}`)
})
