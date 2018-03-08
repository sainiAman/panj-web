'use strict';

const express     = require('express');
const path        = require('path');
const http        = require('http');
const bodyParser  = require('body-parser');
const cors        = require('cors');

const app = express();
const api = require('./backend/route/index.route')(app);

app.use(cors());

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api/v1', api);

const port = process.env.PORT || '5000';
const server = http.createServer(app);
app.set('port', port);

server.listen(port, function () {
  console.log('server is running at ' + port);
});
