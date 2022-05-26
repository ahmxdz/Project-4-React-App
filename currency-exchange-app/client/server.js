const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors  = require('cors');

const clientRouter = require('./server/routes/client.route')
const exchangeRouter = require('./server/routes/exchange.route')
const apiRouter = require('./server/routes/api.route')

const app = express();

require('dotenv').config();
require('./server/config/database');

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors())
app.use('/currency-converter', apiRouter)

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./server/routes/users.route'));
// app.use('/api/scores', require('./routes/api/scores'));
app.use('/api/clients', clientRouter);
app.use('/api/exchange', exchangeRouter);

// The following "catch all" route (note the *)is necessary
// for a SPA's client-side routing to properly work 
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.SERVER_PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});