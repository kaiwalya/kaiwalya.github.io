var http = require('http')
var port = process.env.PORT || 1337;
var url = require("url");

http.createServer(function(req, res) {
	var origin = req.headers.origin;
	if (origin) {
		var originUrl = url.parse(origin);
		console.log(originUrl);
		var hostname = originUrl.hostname;
		if (hostname) {
			["kaiwalya.com", "0.0.0.0", "localhost", "127.0.0.1"].forEach(function (allowedHostname) {
				if (hostname === allowedHostname) {
					res.setHeader("Access-Control-Allow-Origin", req.headers.origin);	
				}
			});
		}
	}
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('Hello World\n');
}).listen(port);