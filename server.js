var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html');
})

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
})
