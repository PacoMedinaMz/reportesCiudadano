const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const events = require('./events.js');

const connection = mysql.createConnection({
  host     : 'm.pacomedina.mx',
  user     : 'paco',
  password : 'MySql2020+',
  database : 'Reportes'
});

connection.connect();

const port = process.env.PORT || 4201;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(events(connection));

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});