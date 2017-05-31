'use strict';

var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();
app.use(express.static('html'));

// Add middleware for http proxying 
var apiProxy = proxy('/news', { target: 'http://www.bbc.com/', changeOrigin: true });
app.use('/news', apiProxy);

app.listen(3000, function () {
    console.log('Listening on: http://localhost:3000');
});
//# sourceMappingURL=proxy.js.map
