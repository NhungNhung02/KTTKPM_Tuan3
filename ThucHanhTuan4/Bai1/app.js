const http = require('http');

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end('Hello, Docker!');
}

const server = http.createServer(requestListener);
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});