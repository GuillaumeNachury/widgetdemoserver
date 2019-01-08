/**
 *  Simple HTTP server that provides a fake API
 * 
 * @author Guillaume Nachury
 */
const xpress = require('express');
const http = require('http');
const cors = require('cors');

const PORT = 2601;

const _app = xpress();
_app.use(cors());

const _server = http.createServer(_app);
_server.listen(PORT);

_app.get('/api/data/company', onDataRequest);

function onDataRequest(req, res){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(require('./companyData.json')));
    res.end();
}

console.log("Server is now running on port "+PORT)