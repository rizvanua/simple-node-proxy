const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();
app.use(express.static('html'));

// Add middleware for http proxying 
const apiProxy = proxy('/news', { target: 'http://www.bbc.com/', changeOrigin: true});
app.use('/news', apiProxy);

app.listen(3000, () => {
    console.log('Listening on: http://localhost:3000');
});