const http = require('http');
const url = require('url');
const Model = require('./Model/calculatorModel.js');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const query = parsedUrl.query;

  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.end();
  } else if (path === '/modeleval') {
    const expresion = query.expression;

    let calculatorModel = new Model();
    let result = calculatorModel.evaluateExpression(expresion.toString());

    res.writeHead(200, {
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': '*',
    });
    res.end(result.toString());
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Ruta no encontrada');
  }
});

server.listen(3000, () => {
  console.log('Servidor Node en ejecución en el puerto 3000');
});
