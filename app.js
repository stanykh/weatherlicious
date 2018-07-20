'use strict';
const express = require('express');
const app = express()

const wuRoute = require('./router/wu-route');
const owmRoute = require('./router/owm-route');

app.use('/owm', owmRoute);
app.use('/wu', wuRoute);

const server = app.listen(8080, function() {
  const port = server.address().port;
  console.log('Weather proxy listening to :' + port);
});

/*
 *  Exception 
 */
process.on("uncaughtException", function (err) {
  console.log("Exception caught: " + err.code);
  console.log(err.stack);
});

module.exports = app;