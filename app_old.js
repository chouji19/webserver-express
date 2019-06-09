const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'application/json' });

    var dato = {
        nombre: 'Camilo',
        apellido: 'Esteban',
        URL: req.url
    };
    res.write(JSON.stringify(dato));
    res.end();
}).listen(8080);

console.log('Escuchando el 8080');