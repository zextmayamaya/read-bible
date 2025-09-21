const http = require('http')
const fs = require('fs')

const server = http.createServer()

server.on('request', (req,res) => {
	const {url,method} = req
  let file

  if(url === '/' && method === 'GET') {
    fs.readFile("index.html", "utf8", (err, data) => {
      console.log(data)
      file = data
    }
  }
	const str = `
		<h2>hello love</h2>
		<p>
		url is ${url}, method is ${method}
		</p>
	`
	res.setHeader('Content-Type','text/html;charset=utf-8')
	res.end(file)
})

server.listen(8080, () => {
		console.log("server is running 8080")
})
