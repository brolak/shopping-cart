var express = require('express');
var app = express();
app.listen(8080);

app.use(express.static('public'));
app.use(express.static(__dirname + '/node_modules'));

app.get('/', function(request, response){
  response.send({ name: 'John', age: 30 });
});

app.get('/anotherRoute', function(request, response){
  response.send("Hey, I'm another route!");
});