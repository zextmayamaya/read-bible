const http = require('http')

const server = http.createServer()

server.on('request', (req,res) => {
	const {url,method} = req
	const str = `
		<h2>hello love</h2>
		<p>
		url is ${url}, method is ${method}
		</p>
	`
	res.setHeader('Content-Type','text/html;charset=utf-8')
	res.end(str)
})

server.listen(8080, () => {
		console.log("server is running 8080")
})
