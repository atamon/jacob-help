var express = require('express');
var handlebars = require('handlebars');
var fs = require('fs');

var templateString = fs.readFileSync('./table.hbs', 'UTF-8');

console.log('Hello world');

var files = fs.readdirSync('./');

console.log('files', files);

var app = express();

var template = handlebars.compile(templateString);

app.get('/', function (req, res) {

  console.log(req.query);

  var selectedFiles = files.filter(function (f) {
    return req.query.q === f;
  });

  var table = template({ files: files });
  res.send(table);
});

app.listen(9090);