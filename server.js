require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require('./routes/concert-api-routes')(app);
require('./routes/restaurant-api-routes')(app);
require('./routes/site-api-routes')(app);
require('./routes/html-routes')(app);

app.listen(PORT, function() {
  console.log(`App running on port ${PORT}`);
});

module.exports = app;