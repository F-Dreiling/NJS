// Http

const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req);
    if (req.url === '/') {
        res.end('Welcome to our homepage');
    }
    else if (req.url === '/about') {
        res.end('Here is our short history');
    }
    else {
        res.end(`
            <h3>Oops!</h3>
            <p>We can't find this page</p>
            <a href="/">back home</a>
        `);
    }
});

server.listen(5000);