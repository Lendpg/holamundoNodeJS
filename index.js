console.log('HOLA MUNDOO ');

const http = require('http');

const host = '0.0.0.0';
const port = 3000;

const server = http.createServer((reg, res) => {
    res.statusCode = 200
    res.setHeader('content-type', 'text/plain')
    res.end('HOLA MUNDO :)')
});

server.listen(port, host , ()=> {
    console.log("SERVER ENCENDIDO EN"+ host + "/" + port)
});