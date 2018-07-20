'use strict';
const nconf = require('nconf');
const express = require('express');
const app = express()

const wuRoute = require('./router/wu-route');
const owmRoute = require('./router/owm-route');

nconf.argv().env().file({file: './config.json'});

app.use('/owm', owmRoute);
app.use('/wu', wuRoute);

const port = nconf.get('port');
const server = app.listen(port, function() {
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