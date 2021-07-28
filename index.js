const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const carRoute = require('./routes/car');
const defaultRoute = require('./routes/default');
const moment = require('moment');

app.use(jsonParser);

app.use('/api/car', carRoute);
app.use('/', defaultRoute)

app.get('/api/time', (req, res) => {
  res.status(200).json({
    time : moment().utc().format('YYYY-MM-DD HH:mm:ss')
  })
});

/*app.get('/', (req, res) => {
  res.status(200).json({
    message : 'Hello World'
  })
});*/

const port = process.env.port || 3001;

app.listen(port, () => {
  console.log('Started on port ' + port);
})


