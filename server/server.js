var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Home of future react app!');
});

app.listen(3000, function () {
  console.log('listening on port 3000...');
});