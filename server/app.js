var express = require('express');
var app = express();

// temp list of logs
var logs = [
  { id : 1, description : "All is well"},
  { id : 2, description : "Another line"},
  { id : 3, description : "This is the end"}
];

app.listen(process.env.PORT || 8888);

app.get('/', function(request, response) {
  response.json(logs);
});

app.get('/log/:id', function(request, response) {
  if(logs.length <= request.params.id || request.params.id < 0) {
    response.statusCode = 404;
    return response.send('Error 404: No log found');
  }

  var log = logs[request.params.id];
  response.json(log);
});