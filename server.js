'use strict';
const express = require('express');
const app = express();

app.use('/', express.static(__dirname + '/public'));
app.use('/', express.static(__dirname + '/app/assets'));
app.use('/', express.static(__dirname + '/dist'));

app.listen(8000);
console.log('Application Started on http://localhost:8000/');
