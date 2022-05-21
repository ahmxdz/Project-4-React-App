const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors  = require('cors');

const clientRouter = require('./server/routes/client.route')

const app = express();

require('dotenv').config();
require('./server/config/database');

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors())

// Put API routes here, before the "catch all" route
// app.use('/api/users', require('./routes/api/users'));
// app.use('/api/scores', require('./routes/api/scores'));
app.use('/api/clients', clientRouter);
// app.get('/api/clients', async (req, res) => {
//   const client = await Client.find({});
//       console.log(client)
// });
// app.post('/api/clients', async (req, res) => {
//   try{
//       console.log('hit this line')
//       console.log(req.body);
//       const client = new Client(req.body);
//       await client.save();
//           return res.json(client)
//   }catch(err){
//       throw err;
//   }
// })

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